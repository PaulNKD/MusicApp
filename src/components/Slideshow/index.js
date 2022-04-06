import React, { useState, useEffect } from 'react';

export const SlideShow = ({ artist }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [])

    const next = () => {
        if (index === albums.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(albums.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const albums = artist.album.map((a, index) => {
        return {a}
    })

    console.log(albums)

    return (
        <div className="slideshow">
            <h1>Albums</h1>
          <div className="actions">
            <button onClick={prev}>⏭️</button>
            <button onClick={next}>⏮️</button>
          </div>
            <h2>{`"${albums[index].a.title}"`}</h2>
          <img className="Images" src={albums[index].a.cover} />      
        </div>
    )
};
