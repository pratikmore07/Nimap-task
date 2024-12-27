import axios from 'axios';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './Home.js';

function App() {

    const [data,setdata]= useState([]);

    const getDataFromAPI=()=>{
 
      const options = {
        method: 'GET',
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': 'e1193b30cfmsh879a0ed80d030ecp1ceb0bjsn6525dcc8cd0f',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };

        axios.request(options).then((opt) =>{

          console.log(opt.data);
          console.log(opt.data[0].image);
          console.log(opt.data[0].id);
          console.log(opt.data[0].title);
                      
          setdata(opt.data);

        })
        .catch((error)=>{
          console.log(error);
        })
     } 

    return(
      <div className='g-0 '>
        <Home/>
        <div className='text-center bg-dark'>
          {  <button type='button' onClick={getDataFromAPI} className='btn btn1 from-center bg-info   text-center '>
          VIEW TOP RATED MOVEIS</button> }
        </div>
 
        <div className="row ">
          {data.map((d,key)=>{
            return(
            
              <div className='col-12 col-md-4 card-section' key={key}>
                <div className="card text-white m-3" id='card'>
                  <div className="card-body ">
      <p className="card-text"> <b>Image -:</b><img src={d.image} className='cardimg my-3'/></p>
      <p className="card-text"> <b>ID  -: </b>   {d.id}</p>
      <p className="card-text"> <b>Title  -: </b>   {d.title}</p>
       
       
                  </div>
                </div>
              </div>
 
                )
              })} 
        </div>      
      </div>
       
     );
}

export default App;
