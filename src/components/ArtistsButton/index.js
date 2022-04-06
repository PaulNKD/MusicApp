import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ArtistsButon = () => {
    const goTo = useNavigate();

    return <button className='ArtistsButton' onClick={() => goTo("artists")}>Artists</button>
};
