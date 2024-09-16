import React, { useContext, useEffect, useRef } from 'react'
import Modal from './Modal'
import { CartContext } from '../utils/CartProvider'
import image from '../assets/image 1.png'
import styled from 'styled-components'
import { COLORS, QUERIES } from '../utils/Constants'
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';
import { CartModal } from '../utils/CartModal'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { MdClose } from "react-icons/md";

const Cart = () => {
  
  const {items,totalAmount,removeItem} = useContext(CartContext)
  const closeRef = useRef();

  
  const {cartModal,setCartModal} = useContext(CartModal)

  useEffect(() => {
    const currentEle = document.activeElement
    closeRef.current.focus();

    return () => {
      currentEle?.focus()
    }
  },[])

  // useEffect(() => {
  //   function keyHandler(event) {
  //     if (event.code === 'Escape') {
  //       setCartModal(false)
  //     }
  //   }
  //   window.addEventListener('keydown',keyHandler);
  //   return () => {
  //     window.removeEventListener('keydown',keyHandler)
  //   }
  // },[setCartModal])

  return (
    <Modal>
      <FocusLock returnFocus={true}>

        <CartHeader>
       <h4>Cart </h4>
      <button style={{backgroundColor:'transparent',border:'none'}} onClick={() => setCartModal(false)} ref={closeRef}><AiOutlineCloseCircle size={30} color={`${COLORS.purple}`}  style={{cursor:'pointer'}}/></button> 
       </CartHeader>
       {items.length === 0 && <p style={{marginTop:'30px'}}>No Items Added to the Cart</p>}
      { items.map((items) => (
       <Wrapper>
       <WrapperOne>
         <ImageWrapper>
         <img src={items.image} alt='nike1' style={{width:'100%',borderRadius:'8px'}} />
         </ImageWrapper>
         <div>
           <NameWrapper>{items.name}</NameWrapper>
           <LabelWrapper>x{items.amount}</LabelWrapper>
         </div>
       </WrapperOne>
       <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
        <div style={{marginLeft:'30px'}}>
         <MainPrice>${items.discount ? items.discount : items.price}</MainPrice>
         {items.discount &&  <del><DiscountPrice>${items.price}</DiscountPrice></del>}
         </div>
          <MdClose size={24} style={{cursor:'pointer'}} onClick={() => removeItem(items.id)}/>
       </div>
      
      </Wrapper>
       ))}
       <TotalWrapper>
       {items.length !== 0 && <h4 style={{fontSize:'20px',fontWeight:500}}>Total Amount: ${totalAmount}</h4>}
       {items.length >0 && <ProceedButton>Proceed to Checkout</ProceedButton>}
       </TotalWrapper>
       </FocusLock>
       
    </Modal>
  )
}

const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 20px;
  border-bottom: 1px solid ${COLORS.gray100};
  /* align-items: center; */
`
const CartHeader = styled.div`
display: flex;
align-content: baseline;
justify-content: space-between;
`

const WrapperOne = styled.div`
  display:flex;
  gap:12px
`

const ImageWrapper = styled.div`
  width:70px;
  height:70px;

  @media(${QUERIES.tabletAndDown}) {
    width:50px;
    height:50px;
  }
`

const NameWrapper = styled.h4`
  font-size:${14/16}rem;
  font-weight: 500;
`

const LabelWrapper = styled.p`
  font-size:${14/16}rem;
  font-weight:400
`

const MainPrice = styled.h4`
font-size:${16/16}rem;
font-weight: 600;

@media(${QUERIES.tabletAndDown}) {
  font-size: ${12/16}rem;
  font-weight: 400;
}
`

const DiscountPrice = styled.p`
  font-size:${14/16}rem;
  font-weight:400
`

const ProceedButton = styled.button`
  background-color: ${COLORS.purple};
  border:none;
  padding:10px 20px;
  border-radius: 4px;
  color:${COLORS.white};
  cursor: pointer;
`

const TotalWrapper = styled.div`
  margin-top: 20px;
`

export default Cart