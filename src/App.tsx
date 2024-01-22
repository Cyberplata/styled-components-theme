import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";


function App() {
  return (
      <div className="App">
        <Box>
          {/*<StyledBtn color={"green"} fontSize={"20px"}>Hello</StyledBtn>*/}
          {/*<StyledBtn color={"red"}>Hello</StyledBtn>*/}
          {/*<StyledBtn fontSize={"30px"}>Hello</StyledBtn>*/}

          <StyledBtn btnType={"primary"} active>Hello</StyledBtn>
          <StyledBtn btnType={"outline"}>Hello</StyledBtn>
        </Box>
      </div>
  );
}

export default App;

// a:hover {
//
// }

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }
    

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`