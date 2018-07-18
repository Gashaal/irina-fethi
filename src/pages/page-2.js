import React from 'react';
import Link from 'gatsby-link';
import Post from '../components/Post';


const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Post
      img="https://pp.userapi.com/c626426/v626426290/6d989/Ut-5JGtBg7M.jpg"
      title="Письмо на рисовой бумаге"
      date="13/06"
    />
  </div>
);

export default SecondPage;
