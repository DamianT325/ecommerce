import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Announcement = () => {
  return <Container>Super Deal Free Shiping+++</Container>;
};

export default Announcement;
