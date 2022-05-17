import { useEffect, useState } from "react"

let useAdmin = user => {
    let [admin, setAdmin] = useState();
    let email = user?.email;

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => setAdmin(data.admin))
        }
    }, [user])
    return [admin]
}

export default useAdmin;