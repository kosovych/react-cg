import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
	state = {
		posts: [],
		selectedId: null,
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => {
				const posts = res.data.slice(0, 4).map( post => ({...post, author: 'Yaroslav'}) )
				this.setState({ posts: posts })
			}
		)
	}

	postSelectedHandler = (id) => {
		this.setState({selectedId: id})
	}

	render () {
		const { posts } = this.state;
		return (
			<div>
				<section className="Posts">
					{posts.map(post =>
						(<Post
							clicked={() => this.postSelectedHandler(post.id)}
							key={post.id}
							title={post.title}
							author={post.author}
							text={post.body}
						/>
					))}
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
