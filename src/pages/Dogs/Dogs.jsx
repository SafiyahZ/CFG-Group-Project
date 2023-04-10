import './dogs.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function Dogs() {
  const [dogs, setDogs] = useState([])
  const [text, setText] = useState("")
  const [searched, setSearched] = useState(false)


  useEffect(() => {
   const fetchDogData = async () => {
    try {
      const res = await fetch('https://api.thedogapi.com/v1/breeds')
      const data = await res.json();
      setDogs(data)
    } catch (error) {
      console.error(error)
    }
  } 
   setSearched(false)
   fetchDogData()
}, [])

const dogSearch = async() => {
	try {
	  const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${text}`)
	     const data = await res.json()
		 setDogs(data)
	} catch(error) {
		console.error(error)
	}
}

const handleSubmit =(e) => {
	e.preventDefault()

	dogSearch()
	setSearched(true)
}

  return (
    <>
     {!dogs ? (
		<h1 className="loading">Loading...</h1>
	 ) : (
		<>
		<section className='container'>
			<div className='container_dog'>
			<h2 className="dog">Dogs</h2>
			<p className ="breeds">Discover your favorite breeds</p>
			<form onSubmit={handleSubmit}>
				<input type="text"
				       name="search" 
					   id="search" 
					   placeholder="Search for a dog breed"
					   className='form'
					   value={text}
					   onChange={(e) => setText(e.target.value)}
					   />
			</form>
			</div>
			<div className='dog_grid'>
			{!searched ? (
                dogs.map((dog) => (
                  <Link
                    to={`/${dog.name}`}
                    key={dog.id}   
                  >
                    <article>
                      <img
                        src={dog.image.url}
                        alt={dog.name}
                        loading="lazy"
                      />
                      <h3>
                        {dog.name}
                      </h3>
                      <p>Bred for: {dog.bred_for}</p>
                    </article>
                  </Link>
                ))
				) : (
                <>
                  {dogs.map((dog) => (
                    <Link
                      to={`/${dog.name}`}
                      key={dog.id}
                    >
                      <article>
                        <img
                          src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                          alt={dog.name}
                        />
                        <h3>
                          {dog.name}
                        </h3>
                        <p>
                          Bred for: {dog.bred_for}
                        </p>
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
	)
}





