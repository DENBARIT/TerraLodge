
// import { useEffect } from "react";
// import { getCabins } from "../services/apiCabins";
import  Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTable from "../Features/cabins/CabinTables";
function  Cabins(){
    // useEffect(function(){
    //     getCabins().then((data)=>console.log(data))
    // })
    return(<>
    <Row type="horizontal">  

<Heading as="h1">All cabins</Heading>
    <p>Filter/Sort</p>

    </Row>
<Row >
    <CabinTable/>
</Row>    
</>)
}
export default Cabins;

