import React from 'react'

function DisplayNasaList({searchObj}) {

   const displayList = searchObj.collection.items;

  return displayList.map((items ,index) => (
    <div key={index} className='result'>
        {items.links && items.links.filter((i)=>i.render === "image").map((p,index) =><img src= {p.href} key ={index}/>)}
        {items.data.map((v, index) => (
            <div key={index}>
                <h3>title:{v.title}</h3>
                <h3>media:{v.media_type}</h3>
                <h3>id: {v.nasa_id}</h3>
            </div>
        ))}
    </div>
  ));
}

export default DisplayNasaList