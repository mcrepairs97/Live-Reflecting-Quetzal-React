import React from 'react'

import PropTypes from 'prop-types'

import './feature-card212.css'

const FeatureCard212 = (props) => {
  return (
    <div className={`feature-card212-feature-card ${props.rootClassName} `}>
      <div className="feature-card212-container">
        <span className="feature-card212-text">{props.description}</span>
      </div>
    </div>
  )
}

FeatureCard212.defaultProps = {
  title: 'Lorem ipsum',
  description:
    "It's not just your wellbeing and safety we concerned about, but also how you are taken care of in terms of security. We here to look after you.",
  rootClassName: '',
}

FeatureCard212.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard212
