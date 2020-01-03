import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import requests from '../requests';

const Create = ({ create, handleSubmit, handleChange, data }) => {
    if(create) {
        return(
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={data.name} name="name" placeholder="name" onChange={handleChange}/>
                <input type="text" value={data.img} name="img" placeholder="Image Link" onChange={handleChange} />
                <input type="text" value={data.sector}  name="sector" placeholder="sector" onChange={handleChange}/>
                <input type="text" value={data.company}  name="company" placeholder="company" onChange={handleChange}/>
                <input type="text" value={data.college}  name="college" placeholder="college" onChange={handleChange}/>
                <input type="text" value={data.field}  name="field" placeholder="field" onChange={handleChange}/>
                <input type="text" value={data.posting}  name="posting" placeholder="posting" onChange={handleChange}/>
                <input type="text" value={data.intern} name="intern" placeholder="Internship" onChange={handleChange} />
                <input type="number" value={data.cgpa}  name="cgpa" placeholder="CGPA" onChange={handleChange}/>
                <input type="number" value={data.x}  name="x" placeholder="Xth Percentile" onChange={handleChange}/>
                <input type="number" value={data.xii}  name="xii" placeholder="XIIth Percentile" onChange={handleChange}/>
                <input type="textarea" value={data.otherach}  name="otherach" placeholder="Other Acheievements" onChange={handleChange}/>
                <input type="textarea" value={data.othershort}   name="othershort" placeholder="Other Shortlist" onChange={handleChange}/>
                <input type="text" value={data.resume} name="resume" placeholder="Resume Link" onChange={handleChange} />
                <input type="number" min="1" max="3" value={data.academy} name="academy" placeholder="Academy rating 1 to 3" onChange={handleChange}/>
                <input type="number" min="1" max="3" value={data.xtracir} name="xtracir" placeholder="Extracurricular rating 1 to 3" onChange={handleChange}/>
                <input type="number" min="1" max="3" value={data.internship} name="internship" placeholder="Internship rating 1 to 3" onChange={handleChange}/>
                <input type="number" min="1" max="3" value={data.responsibility} name="responsibility" placeholder="Positions of responsibility rating 1 to 3" onChange={handleChange}/>
                <input type="submit"/>
           </form>
        )
    } else {
        return null
    }
}

export default Create;