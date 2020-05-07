import React from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import { Link, Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends React.Component {
  state = {
		posts: [],
		selectedId: null,
		error: false
	}

	componentDidMount() {
		console.log(this.props);
		axios.get('posts')
					.then( res => {
						const posts = res.data.slice(0, 4).map( post => ({...post, author: 'Yaroslav'}) )
						this.setState({ posts: posts })
					})
					.catch( err => this.setState({error: true}))
	}

	postSelectedHandler = (id) => {
		this.props.history.push(`/${id}`)
  }
  
  render() {
    let posts = <strong>Ooops...</strong>;
		if (!this.state.error) {
			posts = this.state.posts.map(post =>
				(
					// <Link to={`/${post.id}`} >
						<Post
							key={post.id}
							clicked={() => this.postSelectedHandler(post.id)}
							title={post.title}
							author={post.author}
							text={post.body}
						/>
					// </Link>
			));
		}
    return (
			<div>
      	<section className="Posts">
      	  {posts}
      	</section>
				<Route path="/:id" component={FullPost} />
			</div>
    )
  }
};

export default Posts;
