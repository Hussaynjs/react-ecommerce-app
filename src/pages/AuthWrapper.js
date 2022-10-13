import React, { Children } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const AuthWrapper = ({Children}) => {

  const {isLoading, error} = useAuth0()

  if(isLoading){
    return <Wrapper>
      <h2>loading...</h2>
    </Wrapper>
  }

  if(error){
    return <Wrapper>
    <h2>{error.message}</h2>
  </Wrapper>
  }
  return <>{Children}</>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
