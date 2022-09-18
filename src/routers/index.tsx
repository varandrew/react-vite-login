import { FC, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routes from './route-config'
import Loading from 'pages/Loading'

const Routers: FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Suspense fallback={<Loading />}>
                  <route.child />
                </Suspense>
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export { routes }

export default Routers
