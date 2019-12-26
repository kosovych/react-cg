import React, { Component, StrictMode } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
	state = {
		posts: [],
		selectedId: null,
		error: false
	}

	componentDidMount() {
		axios.get('posts')
					.then( res => {
						const posts = res.data.slice(0, 4).map( post => ({...post, author: 'Yaroslav'}) )
						this.setState({ posts: posts })
					})
					.catch( err => this.setState({error: true}))
	}

	postSelectedHandler = (id) => {
		this.setState({selectedId: id})
	}

	render () {
		let posts = <strong>Ooops...</strong>;
		if (!this.state.error) {
			posts = this.state.posts.map(post =>
				(<Post
					clicked={() => this.postSelectedHandler(post.id)}
					key={post.id}
					title={post.title}
					author={post.author}
					text={post.body}
				/>
			));
		}
		return (
			<div>
				<section className="Posts">
					{posts}
				</section>
				<section>
					<FullPost id={this.state.selectedId} />
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
