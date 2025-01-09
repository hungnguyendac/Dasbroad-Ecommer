import axios from "axios";
import React, { useEffect, useState } from "react";

const useCallApi = (urlProducts) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Call API
    useEffect(() => {
        const getApi = async () => {
            try {
                // Dữ liệu đang được gọi
                setIsLoading(true);
                const res = await axios.get(urlProducts);

                // Dữ liệu gọi xong
                setData(res.data);
                setIsLoading(false);
            } catch (err) {
                console.log("Lỗi: ", err);
            }
        };
        getApi();
    }, [urlProducts]);
    return {
        data,
        isLoading,
    };
};

export default useCallApi;
