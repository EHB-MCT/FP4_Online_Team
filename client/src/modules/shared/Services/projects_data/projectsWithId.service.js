import data from './data/projects.json'

class ProjectsWithIdService {

    async getProjectData(projectID) {
        const URL = `https://api.shiftfestival.be/api/projects/${projectID}`
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error('Failed to fetch projects data');
        }

        const DATA = await response.json();
        // console.log(DATA)
        return DATA;
    }
}

export const projectsWithIdService = new ProjectsWithIdService();