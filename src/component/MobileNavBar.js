import React,{useContext} from 'react'
import MobileNav from './MobileNav'
import styled from 'styled-components';
import { COLORS, QUERIES } from '../utils/Constants';
import { SearchContext } from '../utils/SearchProvider';
import { IoMdClose } from "react-icons/io";

const PRODUCT_CATEGORIES = [
  "All Product",
  "Lifestyle",
  "Running",
  "Basketball",
  "Training & Gym",
  "Football",
  "Skateboarding",
];

const MobileNavBar = () => {
  
  const {category,setCategory,search,setSearch,showMobile,setShowMobile} = useContext(SearchContext)
  return (
    <Wrapper>
      <Content>
      
       <ListWrapper>
       
       <SubNameWrapper>CATEGORIES</SubNameWrapper>
       <CloseMenu onClick={() => setShowMobile(false)}/>
       {PRODUCT_CATEGORIES.map((items,index) => {
            return <li style={{color:category === items ? `${COLORS.pink}` : "black"}} key={index} onClick={() => setCategory(items)}>{items}</li>;
          })}

        </ListWrapper>
        <TextWrapper>Made with ❤️ by Idowu Micheal</TextWrapper>
        </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: none;
@media(${QUERIES.tabletAndDown}) {
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgb(0,0,0,0.75);
  display:flex;
  flex-direction: flex-end;
  flex-direction: row-reverse;

}
 
`

const Content = styled.div`
@media(${QUERIES.tabletAndDown}) {
  background-color: white;
  width:300px;
  height:100%;
}
`
const SubNameWrapper = styled.h6`
  margin-top: -50px;
  margin-bottom: 20px;
  color: ${COLORS.gray900};
`;

const ListWrapper = styled.ul`

@media(${QUERIES.tabletAndDown}) {
  position: sticky;
  top: 0;
  list-style: none;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  & > li {
    font-size: 16px;
    margin-bottom: 4px;
    font-weight: 500;
    cursor: pointer;
  }

}
  
 
`;

const CloseMenu= styled(IoMdClose)`
  color:${COLORS.pink};
  font-size: ${24/16}rem;
  position:absolute;
  top:0;
  right:0;
  margin-top: -60px;
  margin-right: 10px;
  cursor: pointer;
`

const TextWrapper = styled.p`
  color:${COLORS.gray900};
  display:flex;
  align-items:center;
  margin-top:350px;
  justify-content: center;
`


export default MobileNavBar