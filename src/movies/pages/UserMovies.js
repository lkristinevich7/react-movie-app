import React from 'react';
import { useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';

const DUMMY_MOVIES = [
  {
    id: 'm1',
    title: 'Forest Gump',
    description: "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).",
    imageUrl:'https://www.visithopkinsville.com/_uploads/Forrest-Gump-movie.jpg',
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

const UserMovies = () => {
  const {userId}= useParams();
  const userMovies = DUMMY_MOVIES.filter(movie => movie.creator === userId);
  return <MovieList items={userMovies} />;
};

export default UserMovies;
