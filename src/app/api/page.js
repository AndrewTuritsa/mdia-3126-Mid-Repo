"use client";
import { useState } from "react";

export default function Page() {
    //button to click to call
    //function to call
    //somewhere to output data
    //iterator to work through the data and format it
    //display empty and fullfilled state
    //create a state to contain the data

    const [media, setMedia] = useState(null);
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";


    async function fetchMedia() {
        const response = await fetch(API_URL)
        const data = await response.json();
        setMedia(data);
    }

    const MediaOutput = () => {
        if (media){

            let mediaList = [];

            media.forEach((mediaItem, index) => {
                mediaList.push(
                    <li key={index}>
                       <h2 className="text-xl">{mediaItem.title}</h2>
                       <img src={mediaItem.url} />
                       <p>alt={mediaItem.explanation}</p> 
                    </li>
                );
            });



            return(
            <div className="p-4 mb-4 border-4 border-black text-centered">
                <ul>{mediaList}</ul>
            </div>
            )
        }
        return (
            <div className="p-4 mb-4 border-4 border-black text-centered">
                🕳️None
            </div>
        )
    }
  return (
    <div className="p-4 bg-yellow-300">
    Welcome to my API page!
        <header className="p-4 mb-4 border-4 border-black text-centered">
            <h1 className="mb-4 text-4xl">
                <button
                    className="text-yellow-300 bg-black"
                    onClick={fetchMedia}
                >
                    🍖🍖🍖🌌
                </button>
            </h1>
        </header>
        <MediaOutput />
    </div>
  );
}
