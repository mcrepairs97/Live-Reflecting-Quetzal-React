import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links13.css'

const NavigationLinks13 = (props) => {
  return (
    <nav className={`navigation-links13-nav ${props.rootClassName} `}>
      <span className="navigation-links13-text">{props.text}</span>
      <span className="navigation-links13-text1">{props.text1}</span>
      <span className="navigation-links13-text2">{props.text2}</span>
      <span className="navigation-links13-text3">{props.text3}</span>
    </nav>
  )
}

NavigationLinks13.defaultProps = {
  text2: 'Pricing',
  text4: 'Blog',
  text3: 'Team',
  text: 'About',
  rootClassName: '',
  text1: 'Features',
}

NavigationLinks13.propTypes = {
  text2: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks13
