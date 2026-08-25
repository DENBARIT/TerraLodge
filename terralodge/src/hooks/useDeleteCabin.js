 
 import { useMutation, useQueryClient } from "@tanstack/react-query";
 import { deleteCabin as deleteCabinApi } from "../services/apiCabins";
 import toast from "react-hot-toast";
 export function useDeleteCabin() {
 const queryClient=useQueryClient();
  const {isPending:isDeleting,mutate:deleteCabin}=useMutation({mutationFn:(id)=>deleteCabinApi(id),
    
    // invalidating the row for the query to refetch agian
    onSuccess:()=>{
      toast.success("Cabin deleted successfully");
      queryClient.invalidateQueries({
queryKey:["cabin"]
  })

    },
    onError:(err)=>toast.error(err.message),
    
  });
  return {isDeleting,deleteCabin};

}
