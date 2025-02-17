// create your App component here
import { useState, useEffect } from "react"

function App() {
    const [image, setImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(function() {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then(function(data) {
            setImage(data.message);
            setIsLoaded(true);
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>
    

    return (
        <div>
            <img src={image} alt="A Random Dog"/>
        </div>
    )
};

export default App; 