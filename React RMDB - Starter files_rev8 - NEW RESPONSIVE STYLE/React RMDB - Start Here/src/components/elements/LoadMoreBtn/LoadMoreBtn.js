import React from 'react';
import './LoadMoreBtn.css'

const LoadMoreBtn = ({ onClick, text }) => (
        <div className="rmdb-loadmorebtn" onClick={() => onClick(true)}>
           <p>{text}</p>
        </div>
    )


export default LoadMoreBtn;