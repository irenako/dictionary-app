import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photo, setPhoto] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001273ce18e7a2d405c84016dcd0b2b103d";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handlePexelsResponse(response) {
    setPhoto(response.data.photos);
  }
  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <section>
        <h3>Find out the meaning of the word</h3>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeyWordChange}
          />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photo} />
    </div>
  );
}
