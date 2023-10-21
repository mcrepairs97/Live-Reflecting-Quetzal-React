import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links12.css'

const NavigationLinks12 = (props) => {
  return (
    <nav className={`navigation-links12-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links12-text">
        {props.text}
      </Link>
      <Link to="/shop" className="navigation-links12-navlink">
        {props.text1}
      </Link>
      <Link to="/contact" className="navigation-links12-navlink1">
        {props.text2}
      </Link>
      <Link to="/about-us" className="navigation-links12-navlink2">
        {props.text3}
      </Link>
    </nav>
  )
}

NavigationLinks12.defaultProps = {
  text2: 'Pricing',
  rootClassName: '',
  text3: 'Team',
  text1: 'Features',
  text: 'About',
  text4: 'Blog',
}

NavigationLinks12.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks12
