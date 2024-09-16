import React, { useContext } from 'react'
import {createPortal} from 'react-dom'
import styled from 'styled-components'
import { CartModal } from '../utils/CartModal'
import { QUERIES } from '../utils/Constants'



const Modal = ({children}) => {
    const {cartModal,setCartModal} = useContext(CartModal)
    

    const Backdrop = () => {
        return (
            <BackdropWrapper onClick={() => setCartModal(false)}></BackdropWrapper>
        )
    }
    
    const ModalM = ({children}) => {
        return (
            <ModalWrapper>{children}</ModalWrapper>
        )
    }

  return (
    <>
    {createPortal(<Backdrop />,document.getElementById('overlay'))}
    {createPortal(<ModalM>{children}</ModalM>,document.getElementById('overlay'))}
    </>
  )
}

const BackdropWrapper = styled.div`
background-color: rgb(0,0,0,0.75);
position:fixed;
width:100%;
height:100vh;
z-index:2;
backdrop-filter: blur(5px); 
top:0;
right:0;
left:0;
bottom:0;
cursor: pointer;
`

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    max-width: 60%;
    max-height: 80%;
    margin: auto;
    padding: 32px 34px;
    z-index: 2;
    overflow-y: auto;
    border-radius: 8px;

    @media(${QUERIES.tabletAndDown}) {
        max-width: 80%;
    }

`

export default Modal