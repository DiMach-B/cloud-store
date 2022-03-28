import { setFiles } from "../http/filesApi";



const SerchPanel = () => {

    let control = document.getElementById("file")

    return (
    <div>
        <input placeholder="Search type file name and pres Enter"/>
        <button>Search</button>
        <label htmlFor="pagesize">Page size:</label>
        <input id="pagesize" type="number"/>
        <input id="file" type="file" onChange={() => setFiles(control.files[0].name)}/>

        <button>Upload</button>

    </div>
    )
}

export default SerchPanel;
