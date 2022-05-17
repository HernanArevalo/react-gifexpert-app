import React, { useState } from 'react'
import { AddCattegory } from './components/AddCattegory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])


  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCattegory setCategories={ setCategories }/>
        <hr/>
        <ol>
            { 
                categories.map( category =>
                    <GifGrid 
                        category={ category }
                        key = { category }
            />)}
        </ol>
    </>
  )
}
