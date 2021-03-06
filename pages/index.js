import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';

class Index extends Component {
  state = {
    isFlipping: false
  };

  componentDidMount = () => {
    this.animateCard();
  };

  componentWillUnmount = () => {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  };

  animateCard = () => {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 10000);
  };

  render() {
    const { isFlipping } = this.state;
    const { isAuthenticated, user } = this.props.auth;
    const roles = [
      'Developer',
      'Tech Lover',
      'Team Player',
      'Javascript',
      'Node.js',
      'React.js'
    ];
    return (
      <BaseLayout
        className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`}
        {...this.props.auth}
        headerType="index"
        title={'Ramón Romero - Portfolio'}
      >
        <div className="main-section">
          <div className="background-image">
            <img  src="/static/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-1.jpg"
                        alt="guy programming welcome blue"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2>Get Your Projects Done </h2>
                        <div className="hero-section-content-intro">
                          Professional and top quality service in web
                          development.
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-2.jpg"
                        alt="guy programming welcome orange"
                      />
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {isAuthenticated && (
                      <span>
                        <b>{user.name ? user.name : 'User'} </b>
                      </span>
                    )}
                    Welcome to the portfolio website of Ramón Romero. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>

                  <Typed
                    loop
                    typeSpeed={60}
                    backSpeed={60}
                    strings={roles}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                    className="self-typed"
                  />
                </div>
                <div className="hero-welcome-bio">
                  <h2>Let's take a look on my work.</h2>
                </div>
              </Col>
            </Row>
          </Container>
          <span className="service-link"> Vector illustration credit: <a href="https://www.Vecteezy.com/">vecteezy.com</a></span>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
