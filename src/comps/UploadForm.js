import { Button } from '@material-ui/core';
import React, {useState} from 'react'
import ProgressBar from './ProgressBar';


const UploadForm = () =>{
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);


    const types = ['image/png','image/jpeg']

    const changeHandler = (e) =>{
        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError("Por favor pone una imagen .png o .jpeg")
            console.log("noo")

        }
    }
    return ( 
        <form>
            <input type="text"/>
            <input type="file" onChange={changeHandler}/>
            <Button onClick={changeHandler}/>
            <div className= "output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}

            </div>
        </form>
    )
}

export default UploadForm;