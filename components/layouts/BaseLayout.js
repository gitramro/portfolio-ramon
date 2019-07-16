import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, title, cannonical } = props;
  const headerType = props.headerType || "default";
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is Ramón Romero, I'm from Hermosillo, Sonora, México and I am a CS engineer and a freelance developer. I have a Bachelor's degree in CS Engineering and some experience developing web applications with Javascript (React and Node mostly)." />
        <meta name="keywords" content="ramon portfolio, ramón portfolio, ramon developer, ramón developer, ramón freelancing, ramon freelancig, ramón programming, ramón programming, ramon cv, ramón cv" />
        <meta property="og:title" content="Ramón Romero - Developer" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Ramón Romero and I am a Web Developer." />
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`} />}
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
       
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
