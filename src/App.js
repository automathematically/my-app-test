import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from '../src/annotation/home'

const Main = styled.main`
  margin: 0 16px;
  margin-top: 51px;
`

export default () => (
  <Router basename='/react-image-annotation'>
      <Main>
        <Route
          exact
          path='/'
          component={Home}
        />
      </Main>
  </Router>
)
