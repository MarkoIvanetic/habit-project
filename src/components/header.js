import React from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from '@material-ui/core'
import { Link } from 'gatsby'
import { useIsFetching } from 'react-query'

const Header = ({ siteTitle }) => {
    const isFetching = useIsFetching()
    return (
        <header
            style={{
                position: `relative`,
                background: `rebeccapurple`,
                marginBottom: `1.45rem`
            }}>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 1280,
                    padding: `1.45rem 1.0875rem`
                }}>
                <h1 style={{ margin: 0 }}>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`
                        }}>
                        {siteTitle}
                    </Link>
                </h1>
            </div>

            {/* {isFetching ? <CircularProgress style={{ position: 'absolute', top: '0', right: '0' }} /> : null} */}
            {isFetching ? <LinearProgress style={{ position: 'absolute', bottom: '0' }} color="secondary" /> : null}
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string
}

Header.defaultProps = {
    siteTitle: ``
}

export default Header
