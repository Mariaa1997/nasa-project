import React from 'react'
import { useState, useEffect } from 'react'
import Form from "../components/Form"
import DisplayNasaList from '../components/DisplayNasaList'

function NasaList() {
const [ search, setSearch ] = useState(null);

const getSearch = async (searchTerm) => {
  const url = `https://images-api.nasa.gov/search?q=${searchTerm}`;

  try {
    const response = await fetch(url);
    console.log(url);
    const data = await response.json();
    console.log(data);
    setSearch(data);
  } catch (e) {
    console.error(e);
  }
};

useEffect(() => {
  getSearch();
}, []);
console.log(search);


  return (
    <div className='nasalist'>
    <h1>Search <Form nasaSearch={getSearch} /></h1>
    <h2>{search ? <DisplayNasaList searchObj={search} /> : "loading..."}</h2>
    </div>
    );
}


export default NasaList