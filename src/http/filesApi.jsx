import axios from "axios"


export const getFiles = async () => {
    const { data } = await axios.get('https://storage-disc-default-rtdb.firebaseio.com/files.json')

    return Object.keys(data).map(key => ({
        id: key,
        ...data[key]
    }));
}

export const setFiles = async (name) => {
    const { data } = await axios.post('https://storage-disc-default-rtdb.firebaseio.com/files.json', {name})

    return data;
}