import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './MovieForm.css';

const DUMMY_MOVIES = [
  {
    id: 'm1',
    title: 'Forest Gump',
    description: "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).",
    imageUrl: 'https://www.visithopkinsville.com/_uploads/Forrest-Gump-movie.jpg',
    link: "https://www.directv.com/movies/Forrest-Gump-NE1YTi9aS3YwaldueTN6VHJRZW9QQT09",
    creator: 'u1'
  },
  {
    id: 'm2',
    title: "The Devil's Advocate",
    description: "Though it is ultimately somewhat undone by its own lofty ambitions, The Devil's Advocate is a mostly effective blend of supernatural thrills and character exploration.!",
    imageUrl: "https://courtingthelaw.com/wp-content/uploads/devils-advocate-.jpg",
    link:"https://fsharetv.co/movie/the-devil's-advocate-episode-1-tt0118971",
    creator: 'u2'
  }
];


const UpdateMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  console.log( useParams())
  const {movieId} = useParams();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const identifiedMovie = DUMMY_MOVIES.find(p => p.id === movieId);

  useEffect(() => {
    if (identifiedMovie) {
      setFormData(
        {
          title: {
            value: identifiedMovie.title,
            isValid: true
          },
          description: {
            value: identifiedMovie.description,
            isValid: true
          }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedMovie]);

  const movieUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedMovie) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find movie!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="movie-form" onSubmit={movieUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE MOVIE
      </Button>
    </form>
  );
};

export default UpdateMovie;
