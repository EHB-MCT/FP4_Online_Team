class CounterService {
    async getCounterData() {
        const URL = `https://api.shiftfestival.be/api/counter`;

        const response = await fetch(URL);

        if(!response){
            throw new Error('Error while fetching counter data');
        }

        const DATA = await response.json();
        console.log(DATA)
        return DATA
    }
}

export const counterService = new CounterService()