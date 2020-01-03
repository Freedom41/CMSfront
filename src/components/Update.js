import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import requests from '../requests';


const Update = ({ update, mentor, handleChange, handleSubmit, data}) => {

    if(update) {
        return(
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" onChange={handleChange} />
                <input type="text" name="img" placeholder="Image Link" onChange={handleChange} />
                <input type="text" name="sector" placeholder="sector" onChange={handleChange} />
                <input type="text" name="company" placeholder="company" onChange={handleChange} />
                <input type="text" name="college" placeholder="college" onChange={handleChange} />
                <input type="text" name="field" placeholder="field" onChange={handleChange} />
                <input type="text" name="posting" placeholder="posting" onChange={handleChange} />
                <input type="text" name="intern" placeholder="Internship" onChange={handleChange} />
                <input type="number" name="cgpa" placeholder="CGPA" onChange={handleChange} />
                <input type="number" name="x" placeholder="Xth Percentile" onChange={handleChange} />
                <input type="number" name="xii" placeholder="XIIth Percentile" onChange={handleChange} />
                <input type="textarea" name="otherach" placeholder="Other Acheievements" onChange={handleChange} />
                <input type="textarea" name="othershort" placeholder="Other Shortlist" onChange={handleChange} />
                <input type="text" name="resume" placeholder="Resume Link" onChange={handleChange} />
                <input type="number" min="1" max="3" name="academy" placeholder="Academy rating 1 to 3" onChange={handleChange} />
                <input type="number" min="1" max="3" name="xtracir" placeholder="Extracurricular rating 1 to 3" onChange={handleChange} />
                <input type="number" min="1" max="3" name="internship" placeholder="Internship rating 1 to 3" onChange={handleChange} />
                <input type="number" min="1" max="3" name="responsibility" placeholder="Positions of responsibility rating 1 to 3" onChange={handleChange} />
                <input type="submit" />
            </form>
        )
    } else {
        return null
    }
}

export default Update;