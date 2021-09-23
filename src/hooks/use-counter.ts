import { useEffect, useState } from "react";

const useCounter = (step: number) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((state) => state + step);
        }, 1000);
        return () => clearInterval(interval);
    }, [step]);

    return counter;
}

export default useCounter;