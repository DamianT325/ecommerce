import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const ItemInfo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemTitle = styled.h1`
  color: white;
  margin-bottom: 10px;
`;
const Button = styled.button`
  font-weight: 600;
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <ItemImg src={item.img}></ItemImg>
      <ItemInfo>
        <ItemTitle>{item.title}</ItemTitle>
        <Button>SHOP NOW</Button>
      </ItemInfo>
    </Container>
  );
};

export default CategoryItem;
