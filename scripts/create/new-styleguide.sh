#!/usr/bin/env bash

MDX_FILES="*.mdx"

for i in $(pwd)/$MDX_FILES; do
    if [ -r "$i" ] && [ -f "$i" ]; then
      f="$i";
      f="${f##*/}";
      f="${f%.*}";
      comp="${f// /}";

      cat <<EOF >> "$i"
---
name: $f
menu: Styleguide
---

import { Playground, Props } from 'docz'
import { $comp } from './$comp'

# $f

_$f styleguide description placeholder ..._

### Best Practices

-

## Properties

<Props of={$comp} />

## Basic Usage

<Playground>
  <$comp></$comp>
</Playground>
EOF
fi;
done;


JSX_FILES="*.jsx"

for i in $(pwd)/$JSX_FILES; do
    if [ -r "$i" ] && [ -f "$i" ]; then
      f="$i";
      f="${f##*/}";
      f="${f%.*}";
      comp="${f// /}";

      cat <<EOF >> "$i"
import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
}

const ${comp}Styled = ({ children, kind, ...rest }) => (
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

export const $comp = props => <${comp}Styled {...props} />

$comp.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
}

$comp.defaultProps = {
  kind: 'info'
}
EOF
fi;
done;
