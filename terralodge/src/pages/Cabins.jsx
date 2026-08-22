
import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
function  Cabins(){
    useEffect(function(){
        getCabins().then((data)=>console.log(data))
    })
    return(<div>
        <h1>Cabins</h1>
        <img src="https://asuuwxpourukkpotjcac.supabase.co/storage/v1/object/public/Cabins/cabin-001.jpg" alt="Cabin" />
    </div>)
}
export default Cabins;
