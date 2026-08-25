
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export default function useSettings() {
const {isLoading,error,data:settings}=useQuery({

queryKey:["Settings"],
queryFn:getSettings
});
return {settings,error,isLoading};

}