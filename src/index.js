import React, { useState, useEffect } from 'react';
import requests from './requests';
import ReactDOM from 'react-dom';
import Mentor from './components/mentor'
import Create from './components/create.js'
import Update from './components/Update.js'
import Error from './components/Error.js'
import './index.css';

const Admin = () => {

//msg

const [msgs, updatedmsgs] = useState(null)

//toggle Visibility of create
const [create, createMentor] = useState(false);

//Search
const [mentor, searchmentor] = useState("");

const [mentordata, usementordata] = useState(null)

//Update
const [update, updateData] = useState(false)

const [data, inputData] = useState({
    "name": null,
    "img": null,
    "sector": null,
    "company": null,
    "college": null,
    "field": null, 
    "posting": null, 
    "intern": null,
    "cgpa": null, 
    "x": null, 
    "xii": null, 
    "otherach": null, 
    "othershort": null, 
    "rating": null,
    "resume": null
})

const [updateddata, newdata] = useState({
        "name": null,
        "img": null,
        "sector": null,
        "company": null,
        "college": null,
        "field": null,
        "posting": null,
        "intern": null,
        "cgpa": null,
        "x": null,
        "xii": null,
        "otherach": null,
        "othershort": null,
        "rating": null,
        "resume": null
    })

    useEffect(() => {
        requests.getAll(mentor)
            .then(res => {
                usementordata(res.data)
            })
            .catch(err => {
                updatedmsgs(err)
                setTimeout(() => {
                    updatedmsgs(null)
                }, 5000)  
            })
    }, [mentor])

//Search 
const handleSearch = (e) => {
     searchmentor(e.target.value)
}

//Post
const handleCreate = (e) => {
    if(create) {
        createMentor(false)
    } else {
        createMentor(true)
    }
}

const handleChange = (e) => {
    const val = e.target.value;
      inputData({ ...data, [e.target.name]: val })
}


const handleSubmit = (e) => {
    createMentor(false)
    let req = requests.post({ data })
        req.then((res) => {
            updatedmsgs(res.data)
        })
        .catch(err => {
            updatedmsgs(err)
            setTimeout(() => {
                updatedmsgs(null)
            }, 5000)
        })

    inputData({
        "name": null,
        "img": null,
        "sector": null,
        "company": null,
        "college": null,
        "field": null,
        "posting": null,
        "intern": null,
        "cgpa": null,
        "x": null,
        "xii": null,
        "otherach": null,
        "othershort": null,
        "resume": null,
        "academy": null,
        "xtracir": null,
        "internship": null,
        "responsibility": null
    })  
    e.preventDefault()
}
//Update
const handleUpdate = (e) => {
    updateData(true)
}

const handleUpdatedChange = (e) => {
    let val = e.target.value;
    newdata({ ...updateddata, [e.target.name]: val })
}

const submitUpdatedData = (e) => {
    let id = mentordata._id;
    let req = requests.update(id, updateddata);
        req.then(res => {
            updatedmsgs(res.data)
            setTimeout(() => {
                updatedmsgs(null)
            }, 5000)
        })
        .catch(err => {
            updatedmsgs(err)
            setTimeout(() => {
                updatedmsgs(null)
             }, 5000)
         })
        updateData(false)
    e.preventDefault()
}
//Delete
const handleDelete = (e) => {
    let id = mentordata._id;
    let req = requests.removeEntry(id);
        req.then(res => {
            updatedmsgs(res.data)
            setTimeout(() => {
                updatedmsgs(null)
            }, 5000)
        })
        .catch(err => {
           updatedmsgs(err)
           setTimeout(() => {
               updatedmsgs(null)
              }, 5000)
          })
        searchmentor("")
}   
 return( 
        <div className="app">
         
            <div className="main">

               <h1 className="header">
                 Admin Panel
               </h1>
               
            </div>
              <Error msg={msgs} />
                <div className="nav">
                   
                    <input className="input" onChange={handleSearch} placeholder="Search Mentors" />
                    <br></br>
                    <button type="submit" onClick={handleCreate}> Create a Mentor </button>

                </div>

                <Create onClick={handleCreate} create={create} handleSubmit={handleSubmit} handleChange={handleChange} data={data} />
                
                <Mentor search={mentordata} update={handleUpdate} del={handleDelete}/>

                <Update update={update} mentor={mentordata} handleChange={handleUpdatedChange} handleSubmit={submitUpdatedData} data={updateddata}/>
                <h6 className="bottom"> All images for representational purposes from pixabay </h6>
            </div>
    )
}

ReactDOM.render(<Admin />, document.getElementById('root'));

