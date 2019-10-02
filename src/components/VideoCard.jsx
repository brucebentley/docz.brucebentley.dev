import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const VideoCardStyled = ({ children, kind, ...rest }) => (
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

export const VideoCard = props => <VideoCardStyled {...props} />

VideoCard.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

VideoCard.defaultProps = {
  kind: 'info'
}
