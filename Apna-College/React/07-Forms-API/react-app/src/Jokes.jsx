import { useState, useEffect } from "react";

export default function Jokes() {

    let [stateVariableJoke, setStateVariableJoke] = useState({});
    let [isloading, setIsLoading] = useState(true);

    // const URL = "https://official-joke-api.appspot.com/random_joke";
    const URL = "https://official-joke-api.appspot.com/jokes/random";

    const getNewJoke = async () => {
        try {
            setIsLoading(true);

            let response = await fetch(URL);
            let data = await response.json();
            console.log(data);

            setStateVariableJoke(data);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const  getFirstJoke = async () => {
            try {
                let response = await fetch(URL);
                let data = await response.json();
                console.log(data);

                setStateVariableJoke(data);
                setIsLoading(false);
    
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }            
        };
        getFirstJoke();
    }, []);

    return (
        <div>
            {isloading ? (
                <p>Loading....</p>
            ) : ( 
                <>
                    <h5>{stateVariableJoke.setup}</h5>
                    <h5>{stateVariableJoke.punchline}</h5>
                </>
            )}

            <button onClick={getNewJoke}>Fetch New Joke</button>
        </div>
    );
}