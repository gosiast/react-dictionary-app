import React from 'react';
import './Meaning.css';
import Synonyms from './Synonyms';

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <hr />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li>
                <div className="definition">{definition.definition}</div>
              </li>
              <div className="example">{definition.example}</div>
              <Synonyms synonyms={definition.synonyms} />
            </ul>
          </div>
        );
      })}
    </div>
  );
}
