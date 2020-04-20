import React, { useState, useContext } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContext } from '../../shared/context/auth-context';
import './MovieItem.css';

const MovieItem = props => {
  const auth = useContext(AuthContext);
  
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    // console.log('DELETING...');
  };

  return (
    <React.Fragment>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="movie-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this movie? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="movie-item">
        <Card className="movie-item__content">
          <div className="movie-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="movie-item__info">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href={props.link}><Button inverse >Watch now</Button></a>
          </div>
          <div className="movie-item__actions">
            {auth.isLoggedIn && (
              <Button to={`/movies/${props.id}`}>EDIT</Button>
            )}

            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default MovieItem;
