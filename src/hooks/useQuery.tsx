import { useEffect, useState } from "react";
import { Query } from "../types";

export const useQuery = () => {
    const [query, updateQuery] = useState<Query>(``);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (query=== '') {
            setError(`No empty queries`);
        }
    }, [query]);


    return {query, updateQuery, error};
};