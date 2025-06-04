import { useQuery } from "@tanstack/react-query"

//Service
import { counterService } from "../../Services/counter/counter.service"

//Query keys
import { SHARED_QUERY_KEYS } from "./query-keys.const"

export const useCounterData = () => {

    return useQuery({
        queryKey: SHARED_QUERY_KEYS.counter,
        queryFn: counterService.getCounterData,
        refetchInterval: 5000,
        refetchIntervalInBackground: true
    })
}