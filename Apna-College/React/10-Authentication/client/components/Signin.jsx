import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Signin() {

    const [signInUser, setSignInUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleInputChange = (event) => {
        setSignInUser((previousUser) => {
            return { ...previousUser, [event.target.name]: event.target.value };
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        await axios.post("http://localhost:8080/auth/signin", signInUser)
        .then((response) => { 
            if (response.data.status) {
                console.log(response.data);
                navigate("/");
            } else {
                console.log(response.data);
            }
        })
        .catch((error) => console.log(error));

        setSignInUser({
            email: "",
            password: ""
        });
    };

    return (
        <div className="min-h-screen py-28 bg-gradient-to-r from-purple-500 to-pink-500">

            <div className="container mx-auto">

                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-xl overflow-hidden">

                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('../images/1502846052.webp')`}}>
                        <h1 className="text-white text-3xl font-semibold mb-3">Welcome</h1>
                        <div>
                            <p className="text-white">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className="text-3xl mb-4 font-semibold text-center">Sign In</h2>

                        <form onSubmit={handleFormSubmit}>

                            <div className="mt-1">
                                <input value={signInUser.email} onChange={handleInputChange} name="email" className="font-semibold placeholder:font-normal border border-grey-400 rounded-lg shadow-sm py-2 px-3 w-full" type="email" placeholder="email" required/>
                            </div>

                            <div className="mt-5">
                                <input value={signInUser.password} onChange={handleInputChange} name="password" className="font-semibold placeholder:font-normal border border-grey-400 rounded-lg shadow-sm py-2 px-3 w-full" type="password" placeholder="********" required />
                            </div>

                            <div className="flex justify-end mt-1">
                                <Link to="/forgotpassword" className="flex-shrink-0 text-blue-600">Forgot Password?</Link>
                            </div>

                            <div className="mt-5">
                                <button className="w-full rounded-lg shadow-sm py-2 text-center text-white bg-gradient-to-r from-sky-500 to-fuchsia-500" type="submit">Sign In</button>
                            </div>

                        </form>

                        <div className="mt-5">
                            <p>Don&apos;t have an Account?</p>
                            <Link to="/signup">
                                <button className="w-full rounded-lg shadow-sm py-2 mt-2 text-center text-white bg-gradient-to-r from-fuchsia-500 to-sky-500" type="button">Sign Up</button>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}