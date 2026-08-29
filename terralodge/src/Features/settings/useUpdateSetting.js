import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";    
export default function useUpdateSetting() {
    const queryClient = useQueryClient();
    const { mutate: updateSetting, isPending: isUpdating } = useMutation({

mutationFn: (newSetting) => updateSettingApi(newSetting),
        onSuccess: () => {
            toast.success("Setting updated successfully");
            queryClient.invalidateQueries({
                queryKey: ["Settings"]
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { updateSetting, isUpdating };   

    
}