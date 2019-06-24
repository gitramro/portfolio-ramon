import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/portfolios">
          <a>Portfolio</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>

        <Link href="/cv">
          <a>Cv</a>
        </Link>
        <style jsx>
          {
            `
            a{
              font-size:20px
            }
            `
          }
        </style>  
      </React.Fragment>
    );
  }
}

export default Header;
