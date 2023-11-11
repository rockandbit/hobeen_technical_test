import { ApiMethods, Query, SearchResults, User } from "../types";

export const fetchUsers = async (query: Query): Promise<User[]> => {
    const URL = `https://api.github.com/search/users?q=${query}`;
    try {
        if (query === ``) return [];
        const options = {
            method: ApiMethods.GET,
            headers: {},
        };
        const response = await fetch(URL, options);
        const data: SearchResults = await response.json();
        const items = data.items;

        return items;
        
    } catch (error) {
        throw new Error(`Error in the API call - Users`);
    }
   

};