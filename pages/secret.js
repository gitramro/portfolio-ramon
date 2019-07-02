import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import { getSecretData } from '../actions';

class Secret extends Component {


  state = {
    secretData:[]
  }

  static async getInitialProps({req}) {
    const anotherSecretData = await getSecretData(req);
    return { anotherSecretData };
  }

  async componentDidMount() {
    const secretData = await getSecretData();
    this.setState({
      secretData
    });
  }

  displaySecretData() {
    const { secretData } = this.state;
    if (secretData && secretData.length > 0) {
      return secretData.map((sd,index) => <p key={index}>{sd.title}</p>)
    }
    return null;
  }

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          I am Secret Page
          {this.displaySecretData()}
          </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth()(Secret);
