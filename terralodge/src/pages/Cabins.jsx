
// import { useEffect } from "react";
// import { getCabins } from "../services/apiCabins";
import  Row from "../ui/Row";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useState } from "react";
import CabinTable from "../Features/cabins/CabinTables";
import CreateCabinForm from "../Features/cabins/CreateCabinForm ";
import AddCabin from "../Features/cabins/AddCabin";
import CabinTableOperations from "../Features/cabins/CabinTableOperations";
function  Cabins(){
    // const [showForm,setShowForm]=useState(false);
    // useEffect(function(){
    //     getCabins().then((data)=>console.log(data))
    // })
    return(<>
    <Row type="horizontal">  

<Heading as="h1">All cabins</Heading>
    {/* <p>Filter/Sort</p> */}
<CabinTableOperations/>
    </Row>
<Row type="vertical" >
    <CabinTable/>
    {/* used $ to remove the dom warning for styled button props */}
    <AddCabin/>
</Row>
</>)
}
export default Cabins;

