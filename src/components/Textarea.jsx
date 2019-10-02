import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const TextareaStyled = ({ children, kind, ...rest }) => (
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

export const Textarea = props => <TextareaStyled {...props} />

Textarea.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

Textarea.defaultProps = {
  kind: 'info'
}
