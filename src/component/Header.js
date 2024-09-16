import React, { useContext, useEffect, useRef } from "react";
import cart from "../assets/shoppingbag.svg";
import search from "../assets/search.svg";
import styled from "styled-components";
import { COLORS, QUERIES } from "../utils/Constants";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { CartContext } from "../utils/CartProvider";
import Cart from "./Cart";
import { CartModal } from "../utils/CartModal";
import { SearchContext } from "../utils/SearchProvider";

const Header = () => {
  const { items } = useContext(CartContext);

  const { cartModal, setCartModal } = useContext(CartModal);
  
  const {setSearch} = useContext(SearchContext)

  let sum = 0;
  items.forEach((items) => (sum += items.amount));

  useEffect(() => {
    function cartModalHandler(event) {
      if (event.code === "Escape") {
        setCartModal(false);
      }
    }
    window.addEventListener("keydown", cartModalHandler);
    return () => {
      window.removeEventListener("keydown", cartModalHandler);
    };
  });

  return (
    <Wrapper>
      <HeaderPrg>Free shipping on domestic orders over $75!</HeaderPrg>
      <WrapperOne>
        <SearchWrapper>
          <InputStyle type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
          <SearchIcon />
        </SearchWrapper>

        <TextHelp>Help</TextHelp>
        <CartWrapper onClick={() => setCartModal(true)}>
          <CartIcon />
          <CartNumber>{sum}</CartNumber>
        </CartWrapper>
      </WrapperOne>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.gray900};
  padding: 12px 32px;
  display: flex;
  align-items: baseline;
  position: fixed;
  width: 100%;
  z-index: 2;
  top: -16px;
  padding-top: 24px;

  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;
const WrapperOne = styled.div`
  display: flex;
  color: ${COLORS.white};
  align-items: center;
`;

const InputStyle = styled.input`
  border: 1px solid ${COLORS.white};
  height: 25px;
  border-radius: 4px;
  padding-left: 20px;
`;
const SearchWrapper = styled.div`
  position: relative;
`;
const SearchIcon = styled(CiSearch)`
  position: absolute;
  top: 5px;
  left: 3px;
  color: ${COLORS.gray900};
  size: 20px;
`;

const HeaderPrg = styled.p`
  color: ${COLORS.white};
  flex: 1;
  font-size: ${14 / 16}rem;
  font-weight: 500;
`;

const TextHelp = styled.p`
  margin-left: 24px;
  margin-right: 24px;
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray300};
  font-weight: 500;
`;

const CartIcon = styled(RiShoppingBag3Fill)`
  color: ${COLORS.white};
  font-size: 24px;
`;

const CartWrapper = styled.button`
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: solid transparent;
`;

const CartNumber = styled.div`
  position: absolute;
  padding: 2px 4px;
  background-color: red;
  color: #ffffff;
  border-radius: 50%;
  top: 0;
  right: 0;
  font-size: ${10 / 16}rem;
`;

export default Header;
