import React, { Fragment, useState } from 'react'
import AddCategorias from './components/AddCategorias'
import { GifGrid } from './components/GifGrid'

function GifExpertApp() {
   
    const [categorias, setCategorias] = useState(['DBZ'])
   
    return (
        <Fragment>
            <h2>GiftExportApp</h2>
            < AddCategorias setCategorias={setCategorias}/>
            <hr/>
            <ol>
            {  
                     categorias.map(Element=>(
                     <GifGrid 
                     key={Element}
                     categoria={Element}/>
                     ))
            }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp
