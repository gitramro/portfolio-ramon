import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Blog  extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
      <BasePage>
        I am Blog Page
        </BasePage>
      </BaseLayout>
    )
  }
}

export default  Blog
