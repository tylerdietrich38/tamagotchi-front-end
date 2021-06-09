import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Home, Layout, Tamagotchi } from './components'

export function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <Tamagotchi />
          </Route>
          {/* <Route exact path="/2">
          Page 2
        </Route> */}
          <Route path="*">Not Found</Route>
        </Switch>
      </Layout>
    </>
  )
}
