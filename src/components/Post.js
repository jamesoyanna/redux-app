import React, { Component } from 'react'


 class Post extends Component {
   componentWillMount() {
     console.log(12345);
   }

   
   render() {
     return <div>hello from post</div>;
   }
 }
export default Post;