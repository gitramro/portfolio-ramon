import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, title } = props;
  const headerType = props.headerType || "default";
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/82d7fe9220.js"></script>
       </Head> 
    <div className="layout-container">
      <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user} isSiteOwner={isSiteOwner} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
