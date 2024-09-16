import React from 'react'
import styled from 'styled-components'

const BreadCrumb = () => {
  return (
    <Wrapper>
            <Crumb href='/'>Home</Crumb>
            <Crumb href='/'>Sale</Crumb>
            <Crumb href='/'>Shoes</Crumb>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    & a:not(:first-of-type)::before{
        content: '/';
        margin-left: 8px;
        margin-right: 8px;
    }

`

const Crumb = styled.a`
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
`

export default BreadCrumb