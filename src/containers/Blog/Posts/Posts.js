import React, { Component } from "react";
import Post from '../../../components/Post/Post';
import { Route, Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import axiosInstance from '../../../axios';
import './Posts.css';
class Posts extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        axiosInstance.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 8);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Ahmed'
                    }
                })
                this.setState({ posts: updatedPosts });
            });

    }

    selectPostHandler(id) {
        this.setState({ selectedPostId: '/posts/' + id });
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (<Link to={`/posts/${post.id}`} key={post.id} >
                <Post
                    title={post.title}
                    author={post.author}
                    clicked={() => this.selectPostHandler(post.id)} />
            </Link>)
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} component={FullPost} />

            </div>
        )
    }
}

export default Posts;