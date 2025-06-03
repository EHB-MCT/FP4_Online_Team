import PROJECTS_MOCK from "./data/projects.json"

class ProjectsService {
    getProjects(){
        return new Promise(( resolve ) => {
            resolve(PROJECTS_MOCK)
        })
    }
}

export const projectsService = new ProjectsService();