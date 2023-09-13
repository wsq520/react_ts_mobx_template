import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const About: FC<IProps> = (props) => {
  return (
    <div>
      <div>About</div>
    </div>
  )
}

export default memo(About);
