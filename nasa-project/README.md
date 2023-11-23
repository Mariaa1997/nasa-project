# React + Vite

API practice NASA

API Root: https://images-api.nasa.gov 
(base url)

API Endpoints:
 /search 
/asset/{nasa_id}
 /metadata/{nasa_id}
 /captions/{nasa_id}
 /album/{album_name}

/search?q={q}
baseURL + API endpoint + “?=” + {searchstring}”
example:https://images-api.nasa.gov/search?q={q}

 /asset/{nasa_id}
baseURL + API endpoint + nasa_id 
https://images-api.nasa.gov/asset/as11-40-5874

/metadata/{nasa_id}
baseURL + API endpoint + nasa_id

https://images-api.nasa.gov/metadata/as11-40-5874
 

/captions/{nasa_id} 
baseURL + API endpoint + nasa_id

https://images-api.nasa.gov/captions/172_ISS-Slosh

/album/album_name
baseURL + API endpoint + album

https://images-api.nasa.gov/album/apollo

Next step:
-Create a React application using Vite, and use react-router-dom to have the following three routes:
/ goes to Home
/nasalist goes to the NASA search page
/about goes to About
-Add a search bar and console.log the search term
-Create a component for your form, display and navigation.
-In your form component, use handleChange and handlesubmit.
	-handleChange function dynamically updates the state using the event object.
	-handleSubmit prevents the page from refreshing.
-Don’t forget to import your pages and components in the App.jsx
-Use useState method and useEffect.
-map over the (object)data to return a collection of data.
-The localHost should display the images with data when you type into the search. 


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
