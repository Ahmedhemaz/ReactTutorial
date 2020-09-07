import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        console.log(this.props);
        if(this.props.match.params.id){
            axios.get(`/posts/${this.props.match.params.id}`)
            .then(response => {
                this.setState({loadedPost: response.data})
            });
        }
    }

    deletePostHandler = ()=>{
        axios.delete(`/posts/${this.props.id}`)
            .then(response => console.log(response));
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;
        if(!this.state.loadedPost) {
            post = <p style={{textAlign: "center"}}>Loading...!</p>;
            return post
        }
        if(this.props.match.params.id){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;