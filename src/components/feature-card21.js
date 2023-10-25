import React from 'react'

import PropTypes from 'prop-types'

import './feature-card21.css'

const FeatureCard21 = (props) => {
  return (
    <div className={`feature-card21-feature-card ${props.rootClassName} `}>
      <div className="feature-card21-container">
        <span className="feature-card21-text">{props.description}</span>
      </div>
    </div>
  )
}

FeatureCard21.defaultProps = {
  title: 'Lorem ipsum',
  rootClassName: '',
  description:
    "It's not just your wellbeing and safety we concerned about, but also how you are taken care of in terms of security. We here to look after you.",
}

FeatureCard21.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard21
