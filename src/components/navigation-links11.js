import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links11.css'

const NavigationLinks11 = (props) => {
  return (
    <nav className={`navigation-links11-nav ${props.rootClassName} `}>
      <span className="navigation-links11-text">{props.text}</span>
      <span className="navigation-links11-text1">{props.text1}</span>
      <span className="navigation-links11-text2">{props.text2}</span>
      <span className="navigation-links11-text3">{props.text3}</span>
    </nav>
  )
}

NavigationLinks11.defaultProps = {
  rootClassName: '',
  text4: 'Blog',
  text2: 'Pricing',
  text3: 'Team',
  text: 'About',
  text1: 'Features',
}

NavigationLinks11.propTypes = {
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks11
