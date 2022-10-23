import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./Data.json";

export default function App() {
  const [keyword, setKeyword] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const handleChange = (e) => setkeyword(e.target.value);

  // useEffect(() => {
  //   const results = data.filter((o) => o.nim.includes(keyword));
  //   setSearchResults(results);
  // }, [keyword]);

  return (
    <div className="App">
      <h1>Kelompok 06</h1>
      <h1>Pencarian data OnkeyUp</h1>
      <input
        type="text"
        value={keyword}
        onChange={event => setKeyword(event.target.value)}/>
      {
        data.filter(post => {
          if (keyword === '') {
            return null;
          } else if (post.nim.toString().includes(keyword.toString())) {
            return post;
          }
        }).map((post) => (
          <div className="box" key={post.nim}>
            <p>{post.nama_lengkap}</p>
            <p>{post.nama_panggilan}</p>
            <p>{post.nim}</p>
          </div>
        ))
      }
    </div>)
}