import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { mobile, mobile2 } from "../responsive";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shop.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

const MenuItem = styled.div`
  margin-left: 15px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  border-style: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  ${mobile({ padding: "10px 0px" })}

  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
  ${mobile2({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Container = styled.div`
  height: 60px;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

export default Navbar;
