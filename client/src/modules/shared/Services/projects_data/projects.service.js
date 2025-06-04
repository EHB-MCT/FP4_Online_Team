class ProjectsService {

    async getProjectsData(){

        const URL = "https://raw.githubusercontent.com/EHB-MCT/FP4_Online_Team/refs/heads/sprint-week-1/client/src/modules/shared/Services/projects_data/data/projects.json"

        const response = await fetch( URL );
        
        if( !response.ok ){
            throw new Error('Failed to fetch projects data');
        }

        const DATA = await response.json();

        console.log(DATA)

        return DATA
    }
}

export const projectsService = new ProjectsService();