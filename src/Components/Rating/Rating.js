import React, { useState } from 'react'
import { Rate } from 'antd';
import "./Rating.css"

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


const Rater = ({ filterrating, movierating, rating, setrating }) => {

    const handleChange = rating => {
        setrating({ rating });
    };

    return (
        <div className="rating">
            { filterrating ?
                <span>
                    <Rate tooltips={desc} onChange={handleChange} rating={rating} />
                </span>
                :
                <span>
                    <Rate disabled value={movierating} />
                </span>
            }
        </div>
    );
}
export default Rater