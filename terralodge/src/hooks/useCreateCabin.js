import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../services/apiCabins";
import toast from "react-hot-toast";


export function useCreateCabin(reset) {
    const queryClient=useQueryClient();
const {mutate:createCabin,isPending:isCreating}=useMutation(
  { mutationFn:createEditCabin,
  
onSuccess:()=>{
  toast.success("Cabin created successfully");
 queryClient.invalidateQueries({queryKey:["cabin"] });
//    reset();
},
onError:(err)=>toast.error(err.message)

});


}



