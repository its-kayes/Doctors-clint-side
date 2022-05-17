import { useEffect, useState } from "react";

let useToken = user => {
    let [token, setToken] = useState('');

    useEffect(() => {
        let email = user?.user?.email;
        let currentUserEmail = { email: email }
        if (email) {
            fetch(`https://murmuring-atoll-87463.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(currentUserEmail)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(' data inside token', data);
                    let accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    // console.log(accessToken);
                    setToken(accessToken);
                });
        }
    }, [user])
    return [token];
}

export default useToken;