import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import axios from 'axios';
import {Link} from '../routes';

class Portfolio extends Component {
  static async getInitialProps() {
    let posts = [];

    try {
      const { data } = await axios.get(
        'http://jsonplaceholder.typicode.com/posts'
      );
      posts = data;
      return { posts: posts.splice(0, 10) };
    } catch (e) {
      console.log(e);
    }
  }

  renderPosts = posts =>
    posts.map(p => (
      <li key={p.id}>
        {' '}
        <Link route={`/portfolio/${p.id}`}>
          <a style={{ 'fontSize': '20px' }}>{p.title}</a>
        </Link>
      </li>
    ));

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
      <BasePage>
          <ul>{this.renderPosts(posts)}</ul>
      </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolio;
