import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Cv  extends Component {
  render() {
    return (
      <BaseLayout  {...this.props.auth}>
      <BasePage>
        I am Cv Page
        </BasePage>
      </BaseLayout>
    )
  }
}

export default  Cv
