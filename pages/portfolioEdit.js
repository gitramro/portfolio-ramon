import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import { Row, Col } from 'reactstrap';

import {getPortfolioById,updatePortfolio} from '../actions'
import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';

class PortfolioEdit extends Component {

  static async getInitialProps({ query }) {
    let portfolio = {}
    try {
      portfolio = await getPortfolioById(query.id);
      return {portfolio}
    } catch (error) {
      console.log(error)
    }
  }

  state = {
    error:undefined
  }

  updatePortfolio = async (portfolioData, { setSubmitting }) => {
    setSubmitting(true);
    try {
      await updatePortfolio(portfolioData);
      setSubmitting(false);
      this.setState({ error: undefined });
      Router.pushRoute('/portfolios');
    } catch (e) {
      const error = e.message || 'Server Error';
      setSubmitting(false);
      this.setState({error})
    }
  }


  render() {
    const { error } = this.state;
    const { portfolio } = this.props.pageProps; //WHY IS COMING FROM PAGEPROPS?
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-create-page" title="Update Portfolio">
          <Row>
            <Col md="6">
              <PortfolioCreateForm initialValues={portfolio} error={error} onSubmit={this.updatePortfolio} />
            </Col>
          </Row>  
         </BasePage>   
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(PortfolioEdit);
