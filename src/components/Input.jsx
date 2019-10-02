import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const InputStyled = ({ children, kind, ...rest }) => (
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

export const Input = props => <InputStyled {...props} />

Input.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

Input.defaultProps = {
  kind: 'info'
}
