import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useIsFetching } from 'react-query'
import { LinearProgress } from './header.style'

const Header = ({ siteTitle }) => {
    const isFetchingRQ = useIsFetching()
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsFetching(isFetchingRQ)
        }, 300)
    }, [isFetchingRQ])

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
            {isFetching ? <LinearProgress color="secondary" /> : null}
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
