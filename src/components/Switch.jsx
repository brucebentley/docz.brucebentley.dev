import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const SwitchStyled = ({ children, kind, ...rest }) => (
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

export const Switch = props => <SwitchStyled {...props} />

Switch.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

Switch.defaultProps = {
  kind: 'info'
}
