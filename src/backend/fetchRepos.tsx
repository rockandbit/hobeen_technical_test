import { ApiMethods, IUserRepo, Query } from "../types";

export const fetchRepos = async (query: Query): Promise<IUserRepo[]> => {
    const URL = `https://api.github.com/users/${query}/repos`;
    try {
        if (query === ``) return [];
        const options = {
            method: ApiMethods.GET,
            headers: {},
        };
        const response = await fetch(URL, options);
        const data: IUserRepo[] = await response.json();
        return data;
        
    } catch (error) {
        throw new Error(`Error in the API call - Repos`);
    }
   

};