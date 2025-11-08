import { useState, useEffect } from "react"
import toast from "react-hot-toast";
import axios from "axios";

function fetchData(api) {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)

    // get data

    const getData = async () => {
        setLoading(true)
        axios.get(api)
            .then(({ data }) => { setData(data) })
            .catch((err) => { setError(err) })
            .finally(() => { setLoading(false) })
    }
    useEffect(() => {
        getData()
    }, [api])

    const createUser = async (newUser) => {
        setLoading(true);
        try {
            const { data: json } = await axios.post(api, newUser);
            setData((prev) => (prev ? [...prev, json] : [json]));
            toast.success("Created!");
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
            // const res = await fetch(`${api}/${id}`, {
            //     method: "PUT",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(editdata)
            // })
            const { data: json } = await axios.put(`${api}/${id}`, editdata);
            setData((prev) =>
                prev.map((user) => (user.id === id ? { ...user, ...json } : user))
            );
            toast.success("Edited!");
        } catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false)
        }
    }

    // delete user

    const deleteUser = async (id) => {
        setLoading(true);
        try {
            // const res = await fetch(`${api}/${id}`, { method: "DELETE" });
            // if (!res.ok) throw new Error(`${res.statusText} ${res.status}`);
            const {data: json} = await axios.delete(`${api}/${id}`)
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