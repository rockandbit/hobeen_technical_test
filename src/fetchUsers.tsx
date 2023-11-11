import { ApiMethods, Query, SearchResults, User } from "./types";

export const fetchUsers = async (query: Query): Promise<User[]> => {
    const URL = `https://api.github.com/search/users?q=`;
    try {
        if (query === ``) return [];
        const options = {
            method: ApiMethods.GET,
            headers: {},
        };
        const response = await fetch(`${URL}${query}`, options);
        const data: SearchResults = await response.json();
        console.log({data});
        const items = data.items;

        return items;
        // mapeo data
        
    } catch (error) {
        throw new Error(`Error in the API call - Users`);
    }
   

};