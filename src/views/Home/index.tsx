import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = (props) => {
  return (
    <div>
      <div>Home</div>
      {/* 占位 渲染子路由 */}
      <Outlet />
    </div>
  )
}

export default memo(Home);
