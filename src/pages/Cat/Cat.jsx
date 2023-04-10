import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom';
import { catOptions } from '../../options';
import './cat.css'

export default function Cat() {
    const [cat, setCat] = useState([]);
    const {catName} = useParams();
    

    useEffect(() => {
        const fetchSingleCatData = async () => {
            try {
              const res = await fetch(`https://api.thecatapi.com/v1/breeds?/search?q=${catName}`,catOptions)
              const data = await res.json();
              setCat(data)
             } catch (error) {
               console.error(error)
             }
            }
            fetchSingleCatData()
    }, [catName]);

    return (
    <>
       <section className="single_cat">
         {cat.map((item) => (
            <div key={item.id} className="grid">
                <article>
                    <img src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
                    alt={item.name} 
            />
                </article>
                <article>
                    <h2>{item.name}</h2>
                    {item.description && <p>{item.description}</p>}

                    <ul>
                        <li>Height: {item.height.metric} cm</li>
                        <li>Weight: {item.weight.metric} kgs</li>
                        <li>Lifespan:{item.life_span}</li>
                        <li>Temperament: {item.temperament}</li>
                    </ul>

                    <Link to="/Cats">&larr; Back</Link>
                </article>
            </div>
         ))}
       </section>
    </>
    )
}



