import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const TooltipStyled = ({ children, kind, ...rest }) => (
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

export const Tooltip = props => <TooltipStyled {...props} />

Tooltip.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

Tooltip.defaultProps = {
  kind: 'info'
}
