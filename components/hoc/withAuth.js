import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

const namespace = 'http://localhost:3000/';

export default role => Component =>
  class withAuth extends React.Component {
    static async getInitialProps(args) {
      //si el componente dentro del hoc tiene get initial props los obtienes en la constante pageProps
      // si no se hace esto (crear esta funcion en el hoc) y se ejecuta getInitialProps en el componente que esta dentro se regresa undefined porque el hoc sobreescribe el getinitialprops de _app.js
      //por eso es necesario usar esto en el withAuth
      const pageProps =
        (await Component.getInitialProps) &&
        (await Component.getInitialProps(args));
      return { pageProps };
    }

    renderProtectedPage() {
      const { isAuthenticated, user } = this.props.auth; //why is this coming from _app?
      const userRole = user && user[`${namespace}role`];
      let isAuthorized = false;

      if (role) {
        if (userRole && userRole === role) {
          isAuthorized = true;
        }
      } else {
        isAuthorized = true;
      }

      if (!isAuthenticated) {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>You are not authenticated. Please Login to access this page.</BasePage>
          </BaseLayout>
        );
      } else if (!isAuthorized) {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>You are not authorized. You dont have permission to visit this page.</BasePage>
          </BaseLayout>
        );
      } else {
        return <Component {...this.props} />;
      }
    }

    render() {
      return this.renderProtectedPage();
    }
  };
