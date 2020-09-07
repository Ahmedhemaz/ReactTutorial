import React,{ Component } from "react";
import Post from '../../../components/Post/Post';
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
            this.setState({posts: updatedPosts});
        });
        
    }

    selectPostHandler(id){
        this.setState({selectedPostId: id});
    }

    render(){
        const posts = this.state.posts.map(post => {
            return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={()=> this.selectPostHandler(post.id)}/>
        });
        return(
            <section className="Posts">
                    {posts}
            </section>
        )
    }
}

export default Posts;