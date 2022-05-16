import { useEffect, useState } from "react";

let useToken = user => {
    let [token, setToken] = useState('');

    useEffect(() => {
        let email = user?.user?.email;
        let currentUserEmail = { email: email }
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body:JSON.stringify(currentUserEmail)
            })
                .then(res => res.json())
                .then(data =>{
                    console.log(' data inside token', data);
                    let accessToken = data.token;
                    localSto
                    setToken(accessToken);
                } );
        }

        // console.log('user inside token', user);
        // console.log('user inside token', user?.user?.email);
    }, [user])
    return [token];
}

export default useToken;