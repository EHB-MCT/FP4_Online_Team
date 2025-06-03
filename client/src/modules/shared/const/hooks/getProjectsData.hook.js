import { useQuery } from "@tanstack/react-query";

//Service
import { projectsService } from "../../Services/projects_data/projects.service";

//Query keys
import { SHARED_QUERY_KEYS } from "./query-keys.const";

export const useProjectsData = () => {
    
    return useQuery({
        queryKey: SHARED_QUERY_KEYS.projects,
        queryFn: projectsService.getProjectsData
    })
    
}