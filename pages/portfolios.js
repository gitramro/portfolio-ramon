import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Col, Row, Button } from 'reactstrap';
import { getPortfolios, deletePortfolio } from '../actions';
import PortfolioCard  from '../components/portfolios/PortfolioCard';
import {Router} from '../routes';

class Portfolio extends Component {
  
  static async getInitialProps() {
    let portfolios=[]
    try {
      portfolios = await getPortfolios();
      return {portfolios}
    } catch (e) {
      console.log(e)
    }

  }

  navigateToEdit = (portfolioId, e) => {
    e.stopPropagation();
    Router.push(`/portfolios/${portfolioId}/edit`)
  }

  displayDeleteWarning = (portfolioId, e) => {
    e.stopPropagation();
    const isConfirm = confirm('Are you sure you want to delete this portfolio?');
    if (isConfirm) {
      this.deletePortfolio(portfolioId);
    }
  }

  deletePortfolio = async(portfolioId) => {
    try {
      await deletePortfolio(portfolioId);
      Router.pushRoute('/portfolios');
    } catch (e) {
      console.log(e)
    }

  }

  renderPortfolios = (portfolios) => {
    const { isAuthenticated, isSiteOwner } = this.props.auth;
    return portfolios.map((p, index) => (
      <Col md="4" key={index}> 
        <PortfolioCard portfolio={p}>
        { isAuthenticated && isSiteOwner &&
          <React.Fragment>
            <Button onClick={(e) => this.navigateToEdit(p._id,e) } color="warning">Edit</Button>{' '}
            <Button onClick={(e) => this.displayDeleteWarning(p._id,e)} color="danger">Delete</Button>
          </React.Fragment>
        }
          </PortfolioCard>
      </Col>
    ));
  }

  render() {
    const { portfolios } = this.props;
    const { isAuthenticated, isSiteOwner } = this.props.auth;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-page" title="Portfolios">
          {isAuthenticated && isSiteOwner &&
            <Button onClick={() => Router.pushRoute('/portfolioNew')} color="success" className="create-port-btn">Create Portfolio</Button>
          }
          <Row>{this.renderPortfolios(portfolios)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolio;
