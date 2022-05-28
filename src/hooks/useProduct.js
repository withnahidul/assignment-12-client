import { useEffect, useState } from 'react';

const useProduct = id => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://infinite-savannah-93709.herokuapp.com/booking/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [id]);
    return [service]
};

export default useProduct;