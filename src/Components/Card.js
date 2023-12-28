import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ bookData }) => {
  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  console.log(bookData);
  const openModal = (item) => {
    setSelectedBook(item);
    setShow(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setShow(false);
  };

  if (!bookData || bookData.length === 0) {
    return <div>No books found</div>;
  }

  return (
    <>
      {bookData.map((item, index) => {
        if (!item || !item.volumeInfo) {
          return null;
        }

        const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
        const amount = item.saleInfo?.listPrice?.amount;

        if (thumbnail && amount !== undefined) {
          return (
            <div className="card" key={index} onClick={() => openModal(item)}>
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="amount">&#8377;{amount}</p>
              </div>
            </div>
          );
        }

        return null;
      })}

      {selectedBook && (
        <Modal show={show} item={selectedBook} onClose={closeModal} />
      )}
    </>
  );
};

export default Card;
