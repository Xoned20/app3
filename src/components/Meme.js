import React from "react"
import memeData from "../memeData.js"

export default function Meme() {

    function getMemeImage() {
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form--input"
                    placeholder="Top text"
                />
                <input 
                    type="text" 
                    className="form--input"
                    placeholder="Bottom text"                
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}