import React from 'react';
import './Synonyms.css';

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms.length !== 0) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>Synonyms: {synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
