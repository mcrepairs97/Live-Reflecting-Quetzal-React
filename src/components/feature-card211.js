import React from 'react'

import PropTypes from 'prop-types'

import './feature-card211.css'

const FeatureCard211 = (props) => {
  return (
    <div className={`feature-card211-feature-card ${props.rootClassName} `}>
      <div className="feature-card211-container">
        <span className="feature-card211-text">{props.description}</span>
      </div>
    </div>
  )
}

FeatureCard211.defaultProps = {
  rootClassName: '',
  description:
    "It's not just your wellbeing and safety we concerned about, but also how you are taken care of in terms of security. We here to look after you.",
  title: 'Lorem ipsum',
}

FeatureCard211.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard211
