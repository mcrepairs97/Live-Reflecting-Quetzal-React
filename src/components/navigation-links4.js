import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links4.css'

const NavigationLinks4 = (props) => {
  return (
    <nav className={`navigation-links4-nav ${props.rootClassName} `}>
      <span className="navigation-links4-text">{props.text}</span>
      <span className="navigation-links4-text1">{props.text1}</span>
      <span className="navigation-links4-text2">{props.text2}</span>
      <span className="navigation-links4-text3">{props.text3}</span>
      <span className="navigation-links4-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks4.defaultProps = {
  text2: 'Pricing',
  text4: 'Blog',
  text: 'About',
  rootClassName: '',
  text3: 'Team',
  text1: 'Features',
}

NavigationLinks4.propTypes = {
  text2: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks4
