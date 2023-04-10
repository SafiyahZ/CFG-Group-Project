import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import './dog.css'

// displays a single dog breed on a different page
export default function Dog() {
    // Initializing a state variable called "dog" as an empty array
    const [dog, setDog] = useState([])
    // Extracting the "name" parameter from the URL
    const {name} = useParams()
// Using the useEffect hook to fetch data from an API 
    useEffect(() => {
        const fetchSingleDogData = async () => {
            try {
                // Fetching data based on the "name" parameter
              const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
              const data = await res.json();
              // Updating the "dog" state variable with the fetched data
              setDog(data)
             } catch (error) {
               console.error(error)
             }
            }
            fetchSingleDogData()
            // Adding "name" as a dependency to the useEffect hook
    }, [name])

    return (
    <>
       <section className="single_dog">
         {dog.map((item) => (
            <div key={item.id} className="grid">
                <article>
                    <img src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                    alt={item.name} />
                </article>
                <article>
                    <h2>{item.name}</h2>
                    {item.description && <p>{item.description}</p>}

                    <ul>
                        <li>Bred for: {item.bred_for}</li>
                        <li>Height: {item.height.metric} cm</li>
                        <li>Weight: {item.weight.metric} kgs</li>
                        <li>Breed group:{item.breed_group}</li>
                        <li>Lifespan:{item.life_span}</li>
                        <li>Temperament: {item.temperament}</li>
                    </ul>
                    { /* Link back to the Dogs page */}
                    <Link to="/Dogs">&larr; Back</Link>
                </article>
            </div>
         ))}
       </section>
    </>
    )
}