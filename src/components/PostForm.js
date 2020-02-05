import React, { Component } from 'react';

 class PostForm extends Component {
constructor(props){
    super(props)
    this.state = {
        title: '',
        body: ''
    }
}

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form>
                    <div>
                        <label>Title:</label>
                        <br />
                        <input type="text" name="title" value={this.state.title}></input>
                    </div>
                    <br />
                    <div>
                        <label>Body:</label>
                        <br />
                        <textarea name="body" value={this.state.body}></textarea>
                    </div>
                    <br />
                </form>
            </div>
        )
    }
}
export default PostForm;