import React from 'react'
import useFirestore from '../hooks/useFirestore';
import PatenteCard from '../comps/PatenteCard'
import { Grid } from '@material-ui/core';
const TrabajosGrid = () => {
    const {docs} = useFirestore('trabajos') 
    console.log(docs)
    return (
        <Grid className="trbjo-grid" item xs = {4} >
            {docs && docs.map(doc =>(
                <div className = "trabajo-wrap" key ={doc.id}>
                    <PatenteCard doc={doc}/>
                    
                </div>
            ))}
        </Grid>
    )
}

export default TrabajosGrid;