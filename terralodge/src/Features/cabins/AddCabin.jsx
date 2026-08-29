
import { useState } from "react";
import Button from "../../ui/Button";

import CreateCabinForm from "./CreateCabinForm ";
import Modal from "../../ui/Modal";
function AddCabin(){
    const [isOpenModal,setIsOpenModal]=useState(false);
return (<div>

<Button type="button"  $variation="primary" $size="medium" onClick={()=>setIsOpenModal((isOpen)=>!isOpen)}>
    Add new Cabin
</Button>
{isOpenModal && <Modal onClose={()=>setIsOpenModal(false)}>
    <CreateCabinForm onClose={()=>setIsOpenModal(false)} />
    
    
    </Modal>}



</div>)
}
export default AddCabin;