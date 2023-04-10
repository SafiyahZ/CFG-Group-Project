import './cats.css';
// import { default as Hero } from '../../components/hero/Hero';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { catOptions } from '../../options';
export default function Cats() {
  const [cats, setCats] = useState([])
  const [text, setText] = useState("")
  const [searched, setSearched] = useState(false)
  useEffect(() => {
   const fetchCatData = async () => {
    try {
      const res = await fetch('https://api.thecatapi.com/v1/breeds', catOptions)
      const data = await res.json();
      setCats(data)
    } catch (error) {
      console.error(error)
    }
  }
   setSearched(false)
   fetchCatData()
}, [])
const catSearch = async() => {
  try {
    const res = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${text}`, catOptions)
       const data = await res.json()
     setCats(data)
  } catch(error) {
    console.error(error)
  }
}
const handleSubmit =(e) => {
  e.preventDefault()
  catSearch()
  setSearched(true)
}
  return (
    <>
     {!cats ? (
    <h1 className="loading">Loading...</h1>
   ) : (
    <>
    <section className='container'>
      <div className='container_cat'>
      <h2 className="cat">Cats</h2>
      <p className ="breeds">Discover your favorite breeds</p>
      <form onSubmit={handleSubmit}>
        <input type="text"
               name="search"
             id="search"
             placeholder="Search for a cat breed"
             className='form'
             value={text}
             onChange={(e) => setText(e.target.value)}
             />
      </form>
      </div>
      <div className='cat_grid'>
      {!searched ? (
                cats.map((cat) => (
                    <Link to={`/${cat.name}`} key={cat.id}>
                    <article>
                      {cat.image ? (
                        <img src={cat.image.url} alt={cat.name} loading="lazy" />
                      ) : (
                        <img src="" alt={cat.name} loading="lazy" />
                      )}
                      <h3>{cat.name}</h3>
                      <p>Adaptability: {cat.adaptability}</p>
                      <p>Affection level: {cat.affection_level}</p>
                      <p>Dog friendly: {cat.dog_friendly}</p>
                      <p>Description: {cat.description}</p>
                    </article>
                  </Link>
                ))
        ) : (
                <>
                  {cats.map((cat) => (
                     <Link to={`/${cat.name}`} key={cat.id}>
                     <article>
                       {cat.reference_image_id ? (
                         <img
                           src={`https://api.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                           alt={cat.name}
                         />
                       ) : (
                         <img src="" alt={cat.name} />
                       )}
                       <h3>{cat.name}</h3>
                      <p>Adaptability: {cat.adaptability}</p>
                      <p>Affection level: {cat.affection_level}</p>
                      <p>Dog friendly: {cat.dog_friendly}</p>
                      <p>Description: {cat.description}</p>
                     </article>
                   </Link>
                 ))}
               </>
             )
             }
      </div>
      </section>
    </>
   )}
    </>
  )}