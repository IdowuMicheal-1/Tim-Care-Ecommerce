import React, { useContext, useState,useMemo } from "react";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 1 (1).png";
import image3 from "../assets/image 1 (2).png";
import image4 from "../assets/image 1 (3).png";
import image5 from "../assets/image 1 (4).png";
import image6 from "../assets/image 1 (5).png";
import styled from "styled-components";
import { COLORS, QUERIES } from "../utils/Constants";
import Tag from "./Tag";
import { CartContext } from "../utils/CartProvider";
import { SearchContext } from "../utils/SearchProvider";

const PRODUCTS = [
  {
    id: "n1",
    name: "NikeCourt Tech Challenge 20",
    label: "Just Released",
    price: 165,
    color: 2,
    discount: 154,
    image: image1,
    category: "Running",
  },
  {
    id: "n2",
    name: "NikeCourt Ace Velocity 21",
    label: "",
    price: 195,
    color: 1,
    discount: "",
    image: image2,
    category: "Lifestyle",
  },
  {
    id: "n3",
    name: "NikeCourt Quantum Leap 22",
    label: "Just Released",
    price: 175,
    color: 2,
    discount: 154,
    image: image3,
    category: "Basketball",
  },
  {
    id: "n4",
    name: "NikeCourt Precision Pro 23",
    label: "Just Released",
    price: 135,
    color: 2,
    discount: 104,
    image: image4,
    category: "Running",
  },
  {
    id: "n5",
    name: "NikeCourt Rapid Volley 24",
    label: "Sale",
    price: 165,
    color: 1,
    discount: "",
    image: image5,
    category: "Lifestyle",
  },
  {
    id: "n6",
    name: "NikeCourt Agility Elite 25",
    label: "Just Released",
    price: 165,
    color: 2,
    discount: 154,
    image: image6,
    category: "Lifestyle",
  },
  {
    id: "n7",
    name: "NikeCourt Fusion Force 26",
    label: "Sale",
    price: 345,
    color: 2,
    discount: "",
    image: image1,
    category: "Training & Gym",
  },
  {
    id: "n8",
    name: "NikeCourt Pinnacle Serve 27",
    label: "Just Released",
    price: 165,
    color: 1,
    discount: 154,
    image: image4,
    category: "Football",
  },
  {
    id: "n9",
    name: "NikeCourt Kinetic Smash 28",
    label: "",
    price: 160,
    color: 2,
    discount: "",
    image: image5,
    category: "Football",
  },
  {
    id: "n10",
    name: "NikeCourt Aero Stride 29",
    label: "",
    price: 155,
    color: 2,
    discount: "",
    image: image1,
    category: "Training & Gym",
  },
];

const PRODUCT_CATEGORIES = [
  "All Product",
  "Lifestyle",
  "Running",
  "Basketball",
  "Training & Gym",
  "Football",
  "Skateboarding",
];

const ProductShow = () => {
  
  const [filterCgy,setFilterCgy] = useState([]);
  const { items, addItems } = useContext(CartContext);
  const {category,setCategory,search,setSearch} = useContext(SearchContext)

  const addCartHandler = (id, name, image, price, discount, label) => {
    addItems({
      id,
      name,
      price,
      discount,
      image,
      amount: 1,
      label,
    });
  };
  
  const GET_PRODUCT = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = category === "All Product" || item.category === category;
      const matchesSearch = search
        ? item.name.toLowerCase().includes(search.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);
    
  
  
  return (
    <Wrapper>
      
      <CategoryWrapper>
        <ListWrapper>
          <SubNameWrapper>CATEGORIES</SubNameWrapper>
          {PRODUCT_CATEGORIES.map((items,index) => {
            return <li style={{color:category === items ? `${COLORS.pink}` : ""}} key={index} onClick={() => setCategory(items)}>{items}</li>;
          })}
        </ListWrapper>
      </CategoryWrapper>
      <ImagWrapper>
        {
          GET_PRODUCT.length === 0 ? (<p>No products found matching your criteria.</p>) : (GET_PRODUCT.map(({ id, name, image, price, discount, color, label }) => (
            <DivWrapper key={id}>
              {label === "" ? (
                ""
              ) : (
                <Tag color={label === "Sale" ? "pink" : "purple"}>{label}</Tag>
              )}
              <ImageStyle src={image} alt={name} />
              <ProductOne>
                <ProductTitle>{name}</ProductTitle>
                <ProductPrice>
                  {discount === "" ? price : <del>{price}</del>}
                </ProductPrice>
              </ProductOne>
              <div>
                <ProductOne>
                  <ProductColor>
                    {color === "" ? "" : `${color} color`}
                  </ProductColor>
                  <PriceDiscount>{discount}</PriceDiscount>
                </ProductOne>
                <AddCartButton
                  onClick={() =>
                    addCartHandler(id, name, image, price, discount, label)
                  }
                >
                  Add to Cart
                </AddCartButton>
              </div>
            </DivWrapper>
          )))
        }
        
      </ImagWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 32px;
  /* max-width: 100%; */
  /* overflow: hidden; */
  z-index: 1;
`;
const CategoryWrapper = styled.div`
  min-width: 248px;
  margin-right: 32px;
  /* border: 1px solid black; */
  padding-top: 120px;
  margin-top: -120px;
  position: sticky;
  top: 0;
  align-items: flex-end;
  height: fit-content;

  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;
const ListWrapper = styled.ul`
  position: sticky;
  top: 0;
  /* left:0; */
  list-style: none;
  align-self: flex-end;
  /* border:1px solid black; */
  /* padding-top: 270px;
margin-top: -70px; */
  /* margin-left: 30px; */

  & > li {
    font-size: 16px;
    margin-bottom: 4px;
    font-weight: 500;
    cursor: pointer;
  }

  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const SubNameWrapper = styled.h6`
  margin-top: -50px;
  margin-bottom: 20px;
`;

const DivWrapper = styled.div`
  position: relative;
  min-width: 275px;
  max-width: 350px;
  margin: 16px;
  flex: 1;
`;

const ImagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -16px;
`;

const AddCartButton = styled.button`
  background-color: ${COLORS.gray900};
  border-radius: 4px;
  border: 1px solid transparent;
  color: #ffffff;
  padding: 6px 12px;
  margin-top: 4px;
  cursor: pointer;
`;

const ProductTitle = styled.p`
  /* display: inline; */
  font-size: ${16 / 16}rem;
  color: ${COLORS.gray900};
  font-weight: 600;
  /* flex: 1; */
`;
const ProductPrice = styled.p`
  /* display: inline; */
  /* margin-left: 55px; */
  font-size: ${16 / 16}rem;
  font-weight: 500;
  color: ${COLORS.gray900};
`;

const ProductOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductColor = styled.p`
  font-size: ${16 / 16}rem;
  font-weight: 500;
  color: ${COLORS.gray700};
  display: inline;
  margin-top: 6px;
`;

const PriceDiscount = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.pink};
  display: inline;
  margin-left: 215px;
  margin-top: 6px;
`;

const ImageStyle = styled.img`
  margin-bottom: 12px;
  width: 100%;
`;

export default ProductShow;
