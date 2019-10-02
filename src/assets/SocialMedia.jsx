import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const SocialMediaStyled = ({ children, kind, ...rest }) => (
  <div
    style={{
      background: 'white',
      color: 'white',
      background: kinds[kind]
    }}
    {...rest}
  >
    {children}
  </div>
)

export const SocialMedia = props => <SocialMediaStyled {...props} />

SocialMedia.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

SocialMedia.defaultProps = {
  kind: 'info'
}
