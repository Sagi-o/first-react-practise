import { useCallback, useState } from "react";

export interface RequestConfig {
    url: string;
    method?: string;
    body?: any;
    headers?: any;
}

const useHttp = () => {
    const [httpState, setHttpState] = useState({
        isLoading: false,
        error: null,
    });

    const sendRequest = useCallback(async (config: RequestConfig, applyDataFn: Function) => {
        setHttpState({
            isLoading: true,
            error: null,
        });
        try {
            console.log(`${config.method || 'GET'} Request to ${config.url}`);
            const response = await fetch(
                config.url, {
                method: config.method || 'GET',
                headers: config.headers || {},
                body: config.body ? JSON.stringify(config.body) : null,
            });
            if (!response.ok) {
                throw new Error('Requests failed');
            }
            const data = await response.json();
            applyDataFn(data);
        } catch (error: any) {
            setHttpState(state => ({
                ...state,
                error: error.message || 'Something went wrong!',
            }));
        }
        setHttpState(state => ({
            ...state,
            isLoading: false,
        }));
    }, []);

    return { ...httpState, sendRequest };
}

export default useHttp;