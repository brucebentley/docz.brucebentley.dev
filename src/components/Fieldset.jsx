import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const FieldsetStyled = ({ children, kind, ...rest }) => (
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

export const Fieldset = props => <FieldsetStyled {...props} />

Fieldset.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

Fieldset.defaultProps = {
  kind: 'info'
}
