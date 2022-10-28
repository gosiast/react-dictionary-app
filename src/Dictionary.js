import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css';

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);

    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      '563492ad6f917000010000010c1fa1aa3ad1430a96ec381ed133e17a';
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up? 👀</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: yoga, forest, music, dancing...
          </div>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
