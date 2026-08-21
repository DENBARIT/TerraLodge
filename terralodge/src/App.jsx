

import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp=styled.main`
  /* background-color: oranger ed; */
  padding: 20px;
`;
function App(){

return <> 
<GlobalStyles/>
<StyledApp>
  <Row>
 {/* rather than using type since resulting as h1,we can use as  */}
 <Row type="horizontal">
  <Heading as="h1">The Terra Lodge</Heading>
<div>
  <Heading as="h2">Check in and out </Heading>
<Button onClick={()=>alert("Check In")}>Check in</Button>
<Button variation="secondary" size="small" onClick={()=>alert("Check Out")}>Check OUT</Button>
</div>
</Row>
<Row>
  <Heading as="h3">Form </Heading>
<form>
<Input placeholder={`"Number of guests"`} type="number"/>
<Input placeholder={`"Number of guests"`} type="number"/>
</form>
</Row>
</Row>
</StyledApp>
</>
  
}
export default App;  