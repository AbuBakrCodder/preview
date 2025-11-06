import { useState, useEffect } from "react"
import toast from "react-hot-toast";

function fetchData(api) {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)

    // get data

    const getData = async () => {
        setLoading(true)
        try {
            let res = await fetch(api)
            if (!res.ok) {
                throw new Error(`${res.statusText} ${res.status}`)
            }
            let data = await res.json()
            setData(data)

        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [api])


    const createUser = async (newUser) => {
        try {
            setLoading(true);
            const res = await fetch(api, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });
            if (!res.ok) throw new Error(`${res.statusText} ${res.status}`);
            const json = await res.json();
            setData((prev) => (prev ? [...prev, json] : [json]));
            toast.success('Created!')
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // edit user

    const editUser = async (id, editdata) => {
        setLoading(true)
        try {
            const res = await fetch(`${api}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editdata)
            })
            if (!res.ok) throw new Error(`${res.statusText} ${res.status}`);
            const json = await res.json()
            setData((prev) =>
                prev.map((user) => (user.id === id ? { ...user, ...json } : user))
            );
            toast.success('Edited!')
        } catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false)
        }
    }

    // delete user

    const deleteUser = async (id) => {
        try {
            setLoading(true);
            const res = await fetch(`${api}/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error(`${res.statusText} ${res.status}`);
            setData((prev) => prev.filter((user) => user.id !== id));
            toast.success('Deleted!')
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // form data

    const formData = (form) => {
        const fd = new FormData(form)
        const newData = {}
        for (let [key, value] of fd.entries()) newData[key] = value
        console.log(newData);
        return newData

    }


    return { data, loading, error, deleteUser, formData, createUser, editUser }
}

export default fetchData