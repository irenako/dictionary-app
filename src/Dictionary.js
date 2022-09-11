import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
    .then(handleResponse);
  function handleResponse(response) {
    console.log(response[0]);
  }
  function search(event) {
    alert(`Searching for ${keyword} definition`);
    event.preventDefault();
  }
  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyWordChange} />
      </form>
    </div>
  );
}
