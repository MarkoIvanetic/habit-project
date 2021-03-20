import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { MenuItem, MenuList } from '@material-ui/core'
import Header from './header'
import './layout.css'

const ROUTES = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Habits',
        link: '/habit-editor'
    }
]

const Layout = ({ location, children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 1280,
                    padding: `0 1.0875rem 1.45rem`
                }}>
                <main>
                    <MenuList style={{ display: 'flex', marginBottom: '15px' }}>
                        {ROUTES.map(route => {
                            return (
                                <MenuItem
                                    key={route.name}
                                    component={Link}
                                    to={route.link}
                                    selected={location.pathname === route.link}>
                                    {route.name}
                                </MenuItem>
                            )
                        })}
                    </MenuList>

                    {children}
                </main>
                <footer
                    style={{
                        marginTop: `2rem`
                    }}>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape
}

Layout.defaultProps = {
    location: { pathname: '/' }
}

export default Layout
