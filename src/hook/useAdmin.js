import { useEffect, useState } from "react"

let useAdmin = user => {
    let [admin, setAdmin] = useState();
    let [adminLoading, setAdminLoading] = useState(true);
    let email = user?.email;

    useEffect(() => {
        if (email) {
            fetch(`https://murmuring-atoll-87463.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })

        }
    }, [user])
    return [admin, adminLoading]
}

export default useAdmin;