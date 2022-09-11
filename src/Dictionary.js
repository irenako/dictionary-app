import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
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
