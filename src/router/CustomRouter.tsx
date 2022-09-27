import React, { useState, useLayoutEffect } from 'react'
import { Router } from 'react-router-dom'
import type { BrowserHistory } from 'history'

interface CustomRouterProps {
  history: BrowserHistory
  children: React.ReactNode
}

const CustomRouter: React.FC<CustomRouterProps> = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  })

  useLayoutEffect(() => history.listen(setState), [history])

  return <Router {...props} location={state.location} navigationType={state.action} navigator={history} />
}

export default CustomRouter
