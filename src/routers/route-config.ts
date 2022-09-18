import React, { lazy } from 'react'
import { RouteProps } from 'react-router-dom'

export interface IRouteBase extends RouteProps {
  path?: string
  name: string
  child: React.FC
  exact?: boolean
  redirect?: string
  /** 是否登录校验，true不进行校验（访客） */
  login?: boolean
}

export interface IRoute extends IRouteBase {
  routes?: Array<IRoute>
}

const routes: IRoute[] = [
  {
    path: '/',
    name: 'home',
    exact: true,
    child: lazy(() => import('pages/Home'))
  },
  {
    path: '/login',
    name: 'login',
    exact: true,
    child: lazy(() => import('pages/Login'))
  }
]

export default routes
