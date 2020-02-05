import React, { Component } from 'react';

 class PostForm extends Component {
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form>
                    <div>
                        <label>Title:</label>
                        <br />
                        <input type="text" name="title"></input>
                    </div>
                    <br />
                    <div>
                        <label>Body:</label>
                        <br />
                        <textarea name="body"></textarea>
                    </div>
                    <br />
                </form>
            </div>
        )
    }
}
export default PostForm;