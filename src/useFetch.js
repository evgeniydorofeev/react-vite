import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch(url).then(res => res.text()).then(setData);
	}, [url]);
	return data;
};

export default useFetch;
