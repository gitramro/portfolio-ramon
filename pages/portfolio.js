import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio extends Component {
  

  static async getInitialProps({ query }) {
    const postId = query.id;
    try {
      const { data } = await axios.get(
        `http://jsonplaceholder.typicode.com/posts/${postId}`
      );
      return { post:data };
    } catch (e) {
      console.log(e);
    }

  }


  render() {
    const { router,post } = this.props;
    return (
      <BaseLayout>
        I am Portfolio Page
        <h2>{router.query.id}</h2>
        <h2>{post.title}</h2>
      </BaseLayout>
    )
  }
}

export default withRouter (Portfolio)
