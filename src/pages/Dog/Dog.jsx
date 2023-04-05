import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import './dog.css'

export default function Dog() {
    const [dog, setDog] = useState([])
    const {name} = useParams()

    useEffect(() => {
        const fetchSingleDogData = async () => {
            try {
              const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
              const data = await res.json();
              setDog(data)
             } catch (error) {
               console.error(error)
             }
            }
            fetchSingleDogData()
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

                    <Link to="/Pets">&larr; Back</Link>
                </article>
            </div>
         ))}
       </section>
    </>
    )
}