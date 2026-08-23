import styled from "styled-components";
import  {formatCurrency}  from "../../utils/helpers";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm ";
import {deleteCabin} from "../../services/apiCabins";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
function CabinRow({cabin}){


const [showForm,setShowForm]=useState(false);

  const {id,name,maxCapacity,regularPrice,discount,image}=cabin;
  const queryClient=useQueryClient();
  const {isPending:isDeleting,mutate}=useMutation({mutationFn:(id)=>deleteCabin(id),
    
    // invalidating the row for the query to refetch agian
    onSuccess:()=>{
      toast.success("Cabin deleted successfully");
      queryClient.invalidateQueries({
queryKey:["cabin"]
  })

    },
    onError:(err)=>toast.error(err.message),
    



  })

  
  return <>
  <TableRow role="row">
    <Img src={image} alt={name} />
    <Cabin>{name}</Cabin>
    <div>Fits upto {maxCapacity} guests</div>
    <Price>{formatCurrency(regularPrice)}</Price>
    <Discount>{formatCurrency(discount)}% off</Discount>
   
   <div>
    <button onClick={()=>setShowForm(!showForm)}>Edit </button>
    <button onClick={()=>mutate(id)} disabled={isDeleting}>Delete</button>
 </div>
  </TableRow>
{showForm && <CreateCabinForm cabinToEdit={cabin} />}
  </> 
}
export default CabinRow;