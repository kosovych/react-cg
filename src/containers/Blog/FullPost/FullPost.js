import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
	state = {
		loadedPost: null
	}

	load() {
		const { id } = this.props.match.params;
		console.log(this.props);
		const { loadedPost } = this.state;
		if (id) {
			if( !loadedPost || (loadedPost && loadedPost.id != id)) {
				axios.get(`/posts/${id}`)
				.then( res => this.setState({loadedPost: res.data}));
			}
		}
	}
	
	componentDidMount() {
		this.load();
	}

	componentDidUpdate() {
		this.load();
	}

	onDeletePost = () => {
		axios.delete(`/posts/${this.props.match.params.id}`)
			.then( res => console.log(res))
	}

	render () {
		const { loadedPost } = this.state;
		let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
		if (loadedPost) {
			post = (
				<div className="FullPost">
					<h1>{loadedPost.title}</h1>
						<p>{loadedPost.body}</p>
					<div className="Edit">
						<button onClick={() => this.onDeletePost()} className="Delete">Delete</button>
					</div>
				</div>
			);
    }
		return post;
	}
}

export default FullPost;
