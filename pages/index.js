import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

class Index extends Component {

  state = {
    title:'I am Index Page'
  }

  static async getInitialProps() {
    try {
      const { data } = await axios.get('http://jsonplaceholder.typicode.com/todos/1');
      return { data };
      
    } catch (e) {
      console.log(e)
    }
  }

  updateTitle = () => {
    this.setState({ title: 'Title updated' });
  }
  render() {
    const { title } = this.state;

    return (
      <React.Fragment>
        <BaseLayout>
          <h1>I am Index Page</h1>
          <h2>{title}</h2>
          <button onClick={this.updateTitle}>Change Title</button>
         </BaseLayout> 
      </React.Fragment>
    );
  }
}

export default Index;
