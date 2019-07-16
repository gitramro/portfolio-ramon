import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';

class About extends Component {
  render() {
    return (
      <BaseLayout  title={'Ramón Romero - About Me'} {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to read short description about me.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>
                  My name is Ramón Romero and I am a Web developer.{' '}
                </p>
                <p>
                  Born and raised in Hermosillo, Sonora, México.
                </p>
                <p>
                  I have a Bachelors's degree in CS Engineering and
                  some years of experience working on a wide range of
                  technologies and fullstack projects mostly with Javascript.
                  I'm always trying to learn new stuff related to Programming but also trying to 
                  improve my technical and social skills.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
