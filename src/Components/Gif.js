import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <img src={props.url} alt="name of gif" />
  </li>
);

export default Gif;