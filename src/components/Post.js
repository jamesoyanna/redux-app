import React, { Component } from 'react'


 class Post extends Component {
   componentWillMount() {
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json())
.then(data=>console.log(data))
   }


   render() {
     return <div>hello from post</div>;
   }
 }
export default Post;