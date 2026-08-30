
import { useState } from "react";
import Button from "../../ui/Button";

import CreateCabinForm from "./CreateCabinForm ";
import CabinTable from "./CabinTables";
import Modal from "../../ui/Modal";
// function AddCabin(){
//     const [isOpenModal,setIsOpenModal]=useState(false);
// return (<div>

// <Button type="button"  $variation="primary" $size="medium" onClick={()=>setIsOpenModal((isOpen)=>!isOpen)}>
//     Add new Cabin
// </Button>
// {isOpenModal && <Modal onClose={()=>setIsOpenModal(false)}>
//     <CreateCabinForm onClose={()=>setIsOpenModal(false)} />
    
    
//     </Modal>}



// </div>)
// }

// Implementation of AddCabin component with compund components pattern
function AddCabin(){
    return (<div>
        <Modal>
 <Modal.Open opens="cabin-form">
 <Button  type="button"  $variation="primary" $size="medium"> Add new cabin</Button>
</Modal.Open> 
<Modal.Window name="cabin-form">
    <CreateCabinForm />
    </Modal.Window>
    

    
    <Modal.Open opens="table">
 <Button  type="button"  $variation="primary" $size="medium" > Show Table</Button>
</Modal.Open> 
<Modal.Window name="table">
    <CabinTable />
    </Modal.Window>
    
    </Modal></div>)

}
export default AddCabin;