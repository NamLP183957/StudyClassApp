import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const Homepage: FC = () => {
    const isLogin = localStorage.getItem("isLogin");
    const history = useHistory();

    useEffect(() => {
        if (!isLogin) {
            history.push("/login");
        }
    }, [])

    return (
        <div>Homepage</div>
    )
}

export default Homepage