import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Post from "../src/components/Post";
import PostForm from "../src/components/PostForm";
function App() {
  return (
    <div className="App">
      <PostForm />
      <Post />
    </div>
  );
}

export default App;
