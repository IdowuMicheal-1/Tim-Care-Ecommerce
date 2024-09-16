import React, { useState, useId, useContext } from "react";
import styled from "styled-components";
import { COLORS, QUERIES } from "../utils/Constants";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { CartModal } from "../utils/CartModal";
import { CartContext } from "../utils/CartProvider";
import { NavLink } from "react-router-dom";
import MobileNavBar from "./MobileNavBar";
import { SearchContext } from "../utils/SearchProvider";

const NAVMENU = [
  {
    name: "SHOP",
    href: "/",
  },
  {
    name: "COMMUNITY",
    href: "/community",
  },
  {
    name: "CONTACT US",
    href: "/contact",
  },
];
const NavBar = () => {
  const {showMobile,setShowMobile,setSearch} = useContext(SearchContext)
  const { items } = useContext(CartContext);
  const id = useId();
  const [hoveredNav, setHoveredNav] = useState(null);

  let sum = 0;
  items.forEach((items) => (sum += items.amount));

 
  const {cartModal,setCartModal} = useContext( CartModal)
  // const border = hoveredNav && ${COLORS.purple}
  return (
    <Wrapper>
      <WrapperLogo>Tim&Care</WrapperLogo>
      <SubNavWrapper onMouseLeave={() => setHoveredNav(null)}>
        {NAVMENU.map((items) => (
          <li key={items.name}>
            <NavLinkWrapper to={items.href}
              href={items.href}
              onMouseEnter={() => setHoveredNav(items.name)}
              style={{ textDecoration: "none", color: "black" }}
            >
              {items.name}
            </NavLinkWrapper>
            {hoveredNav === items.name && (
              <motion.div
                layoutId={id}
                transition={{
                  type:'spring',
                  stiffness:300,
                  damping:40
                }}
                style={{borderBottom:`2px solid ${COLORS.purple}`}}
              />
            )}
          </li>
        ))}
      </SubNavWrapper>
      <IconWrapper >
        <div style={{position:'relative'}}>
        <RiShoppingBag3Fill size={24} onClick={() => setCartModal(true)} style={{cursor:'pointer'}}/>
        <CartMobile>{sum}</CartMobile>
        </div>
        <SearchWrapper>
          <InputStyle type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
          <SearchIcon />
        </SearchWrapper>
        <RxHamburgerMenu size={24} onClick={() => setShowMobile(true)}/>
      </IconWrapper>
      <FIlledLogo />
      {showMobile && <MobileNavBar />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 21px 32px;
  align-items: baseline;
  border-bottom: 1px solid ${COLORS.gray300};
  margin-top: 50px;

  @media (${QUERIES.tabletAndDown}) {
    border-top: 4px solid ${COLORS.gray900};
    justify-content: space-between;
    align-items: center;
    margin-top: 0px;
  }

  @media (${QUERIES.tabletAndDown}) {
    padding-left: 16px;
    padding-right: 16px;
    position: fixed;
    width:100%;
    top:0;
    isolation: isolate;
    z-index: 2;
    background-color: ${COLORS.gray900};
    color:${COLORS.white};
  }

  
`;

const WrapperLogo = styled.h4`
  font-size: ${24 / 16}rem;
  font-weight: 800;
  line-height: 28.18px;
  flex: 1;

  @media (${QUERIES.tabletAndDown}) {
    flex: revert;
  }
`;

const CartMobile = styled.p`
 position: absolute;
  padding: 2px 4px;
  background-color: red;
  color: #ffffff;
  border-radius: 50%;
  top: 0;
  right: 0;
  font-size: ${10 / 16}rem;
  display:flex;
  align-items: center;
  justify-content: center;
`

const InputStyle = styled.input`
  border: 1px solid ${COLORS.white};
  height: 25px;
  border-radius: 4px;
  padding-left: 20px;
  width:90px;
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

const NavMotion = styled(motion.div)`
  border-bottom: 2px solid ${COLORS.purple};
`;

const FIlledLogo = styled.div`
  flex: 1;

  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const SubNavWrapper = styled.ul`
  display: flex;

  & > li {
    list-style: none;
    font-size: ${16 / 16}rem;
    font-weight: 600;
    color: ${COLORS.pink};
    margin-left: 48px;
    cursor: pointer;
    border-bottom: 2px solid var(--border);

  }

  

  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const NavLinkWrapper=styled(NavLink)`
  &.active{
    color: ${COLORS.purple} !important;
  }
`

const IconWrapper = styled.div`
  display: none;

  @media (${QUERIES.tabletAndDown}) {
    display: flex;
    gap: 15px;
  }
`;

export default NavBar;
