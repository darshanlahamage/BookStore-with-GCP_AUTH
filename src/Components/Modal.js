import React from 'react';

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  const {
    volumeInfo,
    saleInfo,
    imageLinks,
    description,
    previewLink,
    webReaderLink,
    smallThumbnail
  } = item;

  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="inner-box">
          <img src={item.volumeInfo.imageLinks?.smallThumbnail} alt="" />
          <div className="info">
            <h1>{volumeInfo.title}</h1>
            <h3>{volumeInfo.authors && volumeInfo.authors.join(', ')}</h3>
            <h4>
              {volumeInfo.publisher} <span>{volumeInfo.publishedDate}</span>
            </h4>
            <p>{volumeInfo.description}</p>
            <a href={volumeInfo.previewLink}>
              <button>More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
