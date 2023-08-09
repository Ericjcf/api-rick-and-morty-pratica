import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 200px;
  width: 150px;
  font-size: 15px;
  font-weight: 800;
  margin: 2px;
  color: ${(props) => (props.status === "Alive" ? "#042940" : "#502000")};
  background-color: ${(props) =>
    props.status === "Alive" ? "#22BABB" : "#F24405"};
  border-radius: 4px;
  img {
    height: 100%;
    width: 100%;
  }
  /* &:hover {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    height: 400px;
    width: 300px;
    font-size: 15px;
    font-weight: 800;
    margin: 2px;
    color: ${(props) => (props.status === "Alive" ? "#042940" : "#502000")};
    background-color: ${(props) =>
    props.status === "Alive" ? "#22BABB" : "#F24405"};
    border-radius: 4px;
    img {
      height: 100%;
      width: 100%;
    }
  } */
`;

export default Container;
