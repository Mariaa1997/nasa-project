import { useState, useEffect } from 'react'

function Form(props) {
    const [formData, setFormData] = useState({
        searchterm: "",
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        props.nasaSearch(formData.searchterm);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name="searchterm"
            onChange={handleChange}
            value={formData.searchterm}
            />
            <input type='submit'
            value="submit" />
        </form>
        <p>search: {formData.searchterm}</p>
    </div>
  )
}

export default Form