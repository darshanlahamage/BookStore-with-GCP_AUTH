import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&key=APIKey`
      );
      if(response.data.items){
        console.log(response.data.items)
      setBookData(response.data.items);
      }else{
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchKeyDown = (evt) => {
    if (evt.key === "Enter") {
      searchBook();
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>There is more treasure in books than in all the pirate's loot on Treasure Island.</h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
            <button onClick={searchBook}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>
     

      <div className="container">
        <Card bookData={bookData} />
      </div>
    </>
  );
};

export default Main;
