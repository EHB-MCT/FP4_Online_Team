import data from './data/projects.json'

class ProjectsWithIdService {

    async getProjectData(projectID) {
        const URL = "https://raw.githubusercontent.com/EHB-MCT/FP4_Online_Team/refs/heads/Fase-2/client/src/modules/shared/Services/projects_data/data/projects.json";

        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error('Failed to fetch projects data');
        }

        const DATA = await response.json();
        console.log(DATA.filter((project) => project.id === projectID));
        return DATA.filter((project) => project.id === projectID);
    }
}

export const projectsWithIdService = new ProjectsWithIdService();