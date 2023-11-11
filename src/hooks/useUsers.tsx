import { useState } from "react";
import { fetchUsers } from "../backend/fetchUsers";
import { Query, User } from "../types";

export const useUsers = (query: Query) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>(``);
    // error
    const getUsers = async () => {
        try {
            setLoading(true);
            const newUsers: User[] = await fetchUsers(query);
            setUsers(newUsers);
        } catch (error) {
            console.log(error);
            setError((error as Record<string, string>).message);
        } finally {
            setLoading(false);
        }
        
    };
    return {users, getUsers, loading, error}; // return loading, error
};