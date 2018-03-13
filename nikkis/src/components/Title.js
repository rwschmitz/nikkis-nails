import React from 'react';
import '../css/title.css';

/* Use an arrow function because this is a stateless component */
const Title = ({titleName}) => (
  <h2 className="title">{titleName}</h2>
);

export default Title;
