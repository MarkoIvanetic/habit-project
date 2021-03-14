/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Header from './header';
import './layout.css';
import { MenuItem, MenuList } from '@material-ui/core';

const ROUTES = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Habits',
    link: '/habit-editor',
  },
];

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log(location);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <MenuList style={{ display: 'flex' }}>
            {ROUTES.map((route) => {
              return (
                <MenuItem
                  key={route.name}
                  component={Link}
                  to={route.link}
                  selected={location.pathname === route.link}
                >
                  {route.name}
                </MenuItem>
              );
            })}
          </MenuList>

          {children}
        </main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

Layout.defaultProps = {
  location: { pathname: '/' },
};

export default Layout;
