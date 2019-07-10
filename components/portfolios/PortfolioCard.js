import React,{Component} from 'react';
import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';
import PortfolioCardDetail from './PortfolioCardDetail';

class PortfolioCard extends Component {

  state = {
    isOpen:false
  }

  handleToggle=()=> {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { portfolio, children } = this.props;
    const { isOpen } = this.state;
    return (
      <span onClick={this.handleToggle}>
        <PortfolioCardDetail toggle={this.handleToggle} portfolio={portfolio} isOpen={isOpen} />
              <Card className="portfolio-card">
                <CardHeader className="portfolio-card-header">
                  {portfolio.position}
                </CardHeader>
                <CardBody>
                  <p className="portfolio-card-city"> {portfolio.location} </p>
                  <CardTitle className="portfolio-card-title">
                    {portfolio.title}
                  </CardTitle>
                  <CardText className="portfolio-card-text">
                    {portfolio.description}
                  </CardText>
                  <div className="readMore">
                   {children}
                  </div>
                </CardBody>
              </Card>
            </span>
    )
  }
  
}

export default PortfolioCard
