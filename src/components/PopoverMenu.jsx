import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const PopoverMenuStyled = ({ children, kind, ...rest }) => (
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

export const PopoverMenu = props => <PopoverMenuStyled {...props} />

PopoverMenu.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

PopoverMenu.defaultProps = {
  kind: 'info'
}
