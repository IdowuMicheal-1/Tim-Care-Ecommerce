import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../utils/Constants'

const Sort = () => {
  return (
    <Wrapper>
        <WrapperLabel htmlFor='releases'>Sort</WrapperLabel>
            <WrapperSelect name='releases' id='releases' required>
              <optgroup label='Sort Product'>
                
                <option value='new'>Newest Releases</option>
              </optgroup>
            </WrapperSelect>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
align-items: center;
`

const WrapperLabel = styled.label`
font-size: ${16/16}rem;
font-weight: 500;
color:${COLORS.gray700};
margin-right: 11px;
`

const WrapperSelect = styled.select`
background-color: ${COLORS.gray100};
height:42px;
border-radius: 8px;
border:1px solid transparent;
padding-left: 16px;
font-size: ${16/16}rem;
font-weight: 500;
`

export default Sort