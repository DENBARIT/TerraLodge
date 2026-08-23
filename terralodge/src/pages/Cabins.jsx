
// import { useEffect } from "react";
// import { getCabins } from "../services/apiCabins";
import  Row from "../ui/Row";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useState } from "react";
import CabinTable from "../Features/cabins/CabinTables";
import CreateCabinForm from "../Features/cabins/CreateCabinForm ";
function  Cabins(){
    const [showForm,setShowForm]=useState(false);
    // useEffect(function(){
    //     getCabins().then((data)=>console.log(data))
    // })
    return(<>
    <Row type="horizontal">  

<Heading as="h1">All cabins</Heading>
    <p>Filter/Sort</p>

    </Row>
<Row type="vertical" >
    <CabinTable/>
    {/* used $ to remove the dom warning for styled button props */}
    <Button $size="medium" $variation="primary" onClick={() => setShowForm((show) => !show)}>Add new  Cabin</Button>
    {showForm && <CreateCabinForm/>}
</Row>
</>)
}
export default Cabins;

