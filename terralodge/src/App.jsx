

import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
const H1=styled.h1`
font-size: 30px;
font-weight:600;
background-color: yellow;
`;

const Input=styled.input`
border:1px solid var(--color-grey-300);
border-radius:var(--border-radius-sm);
background-color:var(--color-grey-300);
 box-shadow:var(--shadow-sm);
padding:0.8rem 1.2rem;`;
const StyledApp=styled.div`
  background-color: orangered;
  padding: 20px;
`;
function App(){

return <>
<StyledApp>
  <GlobalStyles/>
  <H1>The Terra Lodge</H1>

<Button>Check in</Button>
<Button>Check OUT</Button>
<Input placeholder="Number of guests"  type="number"/>
</StyledApp>
</>
  
}
export default App;  