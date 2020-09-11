import React, { Component } from 'react';
import asyncComponent from '../../hoc/asyncComponent';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import { NavLink, Switch, Redirect } from 'react-router-dom';
import PublicRoute from '../../components/utils/PublicRoute';
import PrivateRoute from '../../components/utils/PrivateRoute';
import './Blog.css';
const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));
class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/'>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <PublicRoute path="/posts/" component={Posts} />
                    <PrivateRoute authenticated={true} path="/new-post" component={AsyncNewPost} />
                    <Redirect from="/" to="/posts/" />
                </Switch>
            </div>
        );
    }
}

export default Blog;