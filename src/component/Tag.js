import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../utils/Constants'

const Tag = ({children,color}) => {

    const style=COLORS[color];
    if (!style ) {
        throw new Error (`Unknown color passed: ${color}`)
    }

  return (
    <Wrapper color={color}>
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: absolute;
    top:12px;
    right:-4px;
    background-color:${props => COLORS[props.color]};
    height:32px;
    border: 2px;
    color:${COLORS.white};
    font-size: ${14/16}rem;
    font-weight: 700;
    padding-top: 7px;
    padding-left: 11px;
    padding-right: 9px;
    z-index:1
`

export default Tag