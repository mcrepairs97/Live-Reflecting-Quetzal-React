import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links1-text">
        {props.text}
      </Link>
      <Link to="/shop" className="navigation-links1-navlink">
        {props.text1}
      </Link>
      <Link to="/contact" className="navigation-links1-navlink1">
        {props.text2}
      </Link>
      <Link to="/about-us" className="navigation-links1-link">
        {props.text3}
      </Link>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text2: 'Contact',
  text: 'Home',
  text4: 'Blog',
  text3: 'About us',
  rootClassName: '',
  text1: 'Shop',
}

NavigationLinks1.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks1
