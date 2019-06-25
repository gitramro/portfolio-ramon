import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Blog  extends Component {
  render() {
    return (
      <BaseLayout>
      <BasePage>
        I am Blog Page
        </BasePage>
      </BaseLayout>
    )
  }
}

export default  Blog
