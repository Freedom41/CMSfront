import axios from 'axios'

const base = `/api/adminpanel`

const getAll = async (search) => {
    const req = await axios.get(base, { params: { name: search } })
    return req
}

const post = async (newObj) => {
    const req = await axios.post(base, newObj);
    return req
}

const removeEntry = async (id) => {
    const req = await axios.delete(`${base}/${id}`);
    return req
}

const update = async (id, newObj) => {
    const req = await axios.put(`${base}/${id}`, newObj);
    return req
}

const create = async() => {
    const req = await axios.get("/create")
}

export default {
    getAll: getAll,
    post: post,
    removeEntry: removeEntry,
    update: update,
    create: create
}
