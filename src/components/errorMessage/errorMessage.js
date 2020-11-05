import React from 'react';
import './errorMessage.css';

const ErrorMessage = () => {
    return (
        <>
        <span>Something gues wrong</span>
        <img src = {process.env.PUBLIC_URL  + '/img/err.jpg'} alt = 'error' ></img>
      </>
    )
}

export default ErrorMessage;