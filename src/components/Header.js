import React from "react"

export default function Header() {
    return(
        <div className="meme--header">
            <img src="/images/meme.png"
                alt="meme"
                className="meme--header--photo"
                />
            <span className="meme--header--text"> Meme Generator</span>
        </div>
    )
}