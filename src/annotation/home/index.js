import React, { Component } from 'react'
import styled from 'styled-components'
import Simple from '../samples/index'

const Container = styled.main`
  margin: 0 auto;
  padding: 64px 0;
  max-width: 700px;
`
export default class App extends Component {
  render () {
    return (
      <Container>
        <Simple />
      </Container>
    )
  }
}
