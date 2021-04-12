import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

const MultiStars = ({ stars }) => {
    if (stars > 4) {
        return (
            <>
                <BsFillStarFill className="icon__stars " />
                <BsFillStarFill className="icon__stars " />
                <BsFillStarFill className="icon__stars " />
                <BsFillStarFill className="icon__stars " />
                <BsFillStarFill className="icon__stars" />
            </>
        )
    } else {
        return (
            <>
                <BsFillStarFill className="icon__stars " />
                <BsFillStarFill className="icon__stars " />
                <BsFillStarFill className="icon__stars " />
                <BsFillStarFill className="icon__stars " />
            </>
        )
    }
}

export default MultiStars
