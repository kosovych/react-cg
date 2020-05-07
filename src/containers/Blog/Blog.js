import React, { Component, StrictMode } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from './Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
import FullPost from './FullPost/FullPost';

import './Blog.css';

const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {
	render () {

		return (
			<div>
				<header className="Header">
					<nav className="Header__nav">
						<ul className="Header__nav-list">
							<li className="Header__nav-list-item">
								{/* <a className="Header__nav-list-item-link" href="/">Home</a> */}
								<NavLink exact activeClassName="active" className="Header__nav-list-item-link" to="/">Posts</NavLink>
							</li>
							<li className="Header__nav-list-item">
								{/* <a className="Header__nav-list-item-link" href="/new-post">New Post</a> */}
								<NavLink exact activeClassName="active" className="Header__nav-list-item-link" to="/new-post">New Post</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					{/* <Route path="/new-post" component={NewPost} /> */}
					<Route path="/new-post" component={AsyncNewPost} />
					<Route path="/" component={Posts} />
					<Route render={() => <h1>Not found</h1>} />
				</Switch>
				 
			</div>
		);
	}
}

export default Blog;
