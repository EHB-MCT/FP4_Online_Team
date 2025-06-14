class ProjectsService {

    async getProjectsData(){

        const URL = `https://api.shiftfestival.be/api/projects`

        const response = await fetch( URL );
        
        if( !response.ok ){
            throw new Error('Failed to fetch projects data');
        }

        const DATA = await response.json();
        DATA.sort(() => Math.random() - 0.5);
        // console.log(DATA)
        return DATA
    }
}

export const projectsService = new ProjectsService();