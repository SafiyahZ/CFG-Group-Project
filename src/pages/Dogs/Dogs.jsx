import './dogs.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

// Define the Dogs component and set up state variables
export default function Dogs() {
  const [dogs, setDogs] = useState([])
  const [text, setText] = useState("")
  const [searched, setSearched] = useState(false)

// Use the useEffect hook to fetch dog data from the API 
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
  // Set searched to false and fetch the dog data
   setSearched(false)
   fetchDogData()
}, [])

// Define a function to search for dogs by text
const dogSearch = async() => {
	try {
	  const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${text}`)
	     const data = await res.json()
		 setDogs(data)
	} catch(error) {
		console.error(error)
	}
}

// function to handle form submission
const handleSubmit =(e) => {
	e.preventDefault()
// Call dogSearch to fetch the data and set searched to true
	dogSearch()
	setSearched(true)
}

  return (
    <>
    {/* If there are no dogs, show a loading message */}
     {!dogs ? (
		<h1 className="loading">Loading...</h1>
	 ) : (
		<>
		<section className='container'>
			<div className='container_dog'>
        {/* Display the title and a search form  */}
     
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
        {/*  If the user hasn't searched yet, display all the dogs  */}
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
          //  If the user has searched, only display the dogs that match the search term
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





