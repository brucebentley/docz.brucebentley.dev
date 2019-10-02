import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const TextStyled = ({ children, kind, ...rest }) => (
  <div
    style={{
            color: 'white',
      background: kinds[kind]
    }}
    {...rest}
  >
    {children}
  </div>
)

export const Text = props => <TextStyled {...props} />

Text.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

Text.defaultProps = {
  kind: 'info'
}
