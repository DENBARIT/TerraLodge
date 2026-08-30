import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useCabins } from "./hooks/useCabins";
import CabinRow from "./CabinRow";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";
// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);
// /* width:100%; */
//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;
function CabinTable(){

//     const {data:cabins,isLoading,error}=useQuery({
// queryKey:["cabin"],
// queryFn:getCabins
//     });
const {cabins,isLoading,error}=useCabins();
const [searchParams]=useSearchParams();
    if(isLoading) return <Spinner/>
    
const filterValue=searchParams.get("discount")||"all";
let filteredCabins;
if(filterValue==="all") filteredCabins=cabins;
if(filterValue==="no-discount") filteredCabins=cabins.filter((cabin)=>cabin.discount===0);
if(filterValue==="with-discount") filteredCabins=cabins.filter((cabin)=>cabin.discount>0);
    return (<Menus>

   <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 0.4fr">

{/* <TableHeader role="row"> */}
<Table.Header>
<div></div>
<div>Cabin</div>
<div>Capacity</div>
<div>Price</div>
<div>Discount</div>
<div></div>
</Table.Header>
<Table.Body data={filteredCabins} render={(cabin) => <CabinRow key={cabin.id} cabin={cabin}/>} />
</Table>
</Menus>)}
export default CabinTable;