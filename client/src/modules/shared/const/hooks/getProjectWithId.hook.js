import { useQuery } from "@tanstack/react-query";

//Service
import { projectsWithIdService } from "../../Services/projects_data/projectsWithId.service";

//Query keys
import { SHARED_QUERY_KEYS } from "./query-keys.const";

export const useProjectWithIdData = (id) => {
    return useQuery({
        queryKey: [SHARED_QUERY_KEYS.projectsWithId, id],
        queryFn: () => projectsWithIdService.getProjectData(id),
        enabled: !!id,
    });
}