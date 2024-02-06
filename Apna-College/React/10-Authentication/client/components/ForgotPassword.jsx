import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        await axios.post("http://localhost:8080/auth/forgotpassword", { email })
        .then((response) => { 
            if (response.data.status) {
                alert("Check your Email to Reset your Password!");
                console.log(response.data);
                navigate("/signin");
            } else {
                console.log(response.data);
            }
        })
        .catch((error) => console.log(error));

        setEmail("");
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
                        <h2 className="text-3xl mb-4 font-semibold text-center">Forgot Password?</h2>

                        <form onSubmit={handleFormSubmit}>

                            <div className="mt-5">
                                <input value={email} onChange={(event) => setEmail(event.target.value)} name="email" className="font-semibold placeholder:font-normal border border-grey-400 rounded-lg shadow-sm py-2 px-3 w-full" type="email" placeholder="email" required/>
                            </div>

                            <div className="mt-5">
                                <button className="w-full rounded-lg shadow-sm py-2 text-center text-white bg-gradient-to-r from-sky-500 to-fuchsia-500" type="submit">Send Email</button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}