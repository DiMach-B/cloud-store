import s from "./StorageStyle.module.css"
import { useEffect, useState } from "react"
import SerchPanel from '../../components/SerchPanel'
import { getFiles } from "../../http/filesApi"

const Storage = () => {

    const [files, setFiles] = useState([]); 

    useEffect(() => {
        getFiles().then(data => setFiles(data))

    }, [])

    
    return (
        <div> 
            <div >
                <h1>MY FILES</h1>
                <h3>Online storage</h3>
                <SerchPanel />
                {files.map(el => <div>{el.name}</div>)}
            </div>
        </div>
    )
}

export default Storage;