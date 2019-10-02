import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const GridStyled = ({ children, kind, ...rest }) => (
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

export const Grid = props => <GridStyled {...props} />

Grid.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

Grid.defaultProps = {
  kind: 'info'
}
