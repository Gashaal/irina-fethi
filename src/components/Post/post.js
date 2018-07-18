import React from 'react';
import './post.css';


const Post = (props) => (
  <article>
    <img src={ props.img }/>
    <h3>{ props.title }</h3>
    <datetime>{ props.date }</datetime>
  </article>
);

export default Post;