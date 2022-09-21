import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from '../views/Common/Login'

const AppRouter = () => {
  return (
    <Router>
      <Route path="login" element={<Login />}></Route>
    </Router>
  )
}

export default AppRouter
