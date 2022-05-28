import { useEffect, useState } from 'react';

const useProduct = id => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/booking/${id}`;
    
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [id]);
    return [service]
};

export default useProduct;