import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const ButtonDropdownStyled = ({ children, kind, ...rest }) => (
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

export const ButtonDropdown = props => <ButtonDropdownStyled {...props} />

ButtonDropdown.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

ButtonDropdown.defaultProps = {
  kind: 'info'
}
