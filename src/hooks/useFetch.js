import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                if (isMounted) setData(response.data);
            } catch (error) {
                if (isMounted) setErr(error.message);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        if (url) {
            fetchData();
        }

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, loading, err };
};
