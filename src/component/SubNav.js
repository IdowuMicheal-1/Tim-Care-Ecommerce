import React,{useContext} from "react";
import BreadCrumb from "./BreadCrumb";
import Sort from "./Sort";
import styled from "styled-components";
import { COLORS, QUERIES } from "../utils/Constants";
import { SearchContext } from "../utils/SearchProvider";

const SubNav = () => {

  const {category} = useContext(SearchContext)
  return (
    <Wrapper>
      <LaptopBreadCrumb>
        {/* <BreadCrumb /> */}
        
      </LaptopBreadCrumb>
      <SubWrapper>
        <TabletCrumb>
          <TabletBreadCrumb>
            {/* <BreadCrumb /> */}
          </TabletBreadCrumb>
          <WrapperText>{category}</WrapperText>
        </TabletCrumb>
        <SortWrapper>

        {/* <Sort /> */}
        </SortWrapper>
      </SubWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin-top: 70px;
  padding-left: 32px;
  padding-right: 37px;
  align-items: baseline;
  /* border: 1px solid black; */
`;

const WrapperText = styled.h4`
  font-size: ${24 / 16}rem;
  font-weight: 600;
  color: ${COLORS.gray900};
  text-align: left;
  /* background-color: red; */
  /* margin-left: 36px; */
  @media(${QUERIES.tabletAndDown}) {
    margin-top: 40px;
  }
  
`;

const SubWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TabletCrumb = styled.div``;

const TabletBreadCrumb = styled.div`
  display: none;
  @media(${QUERIES.tabletAndDown}) {
    display:revert
  }
`
const LaptopBreadCrumb = styled.div`
  min-width: 248px;
  margin-right: 32px;



  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const SortWrapper = styled.div`
  @media(${QUERIES.phoneAndDown}) {
    display: none;
  }
`

export default SubNav;
