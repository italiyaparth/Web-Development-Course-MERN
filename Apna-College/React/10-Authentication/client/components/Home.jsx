import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSignOut = async () => {

        await axios.post("http://localhost:8080/auth/signout", )
        .then((response) => { 
            if (response.data.status) {
                console.log(response.data);
                navigate("/signin");
            } else {
                console.log(response.data);
            }
        })
        .catch((error) => console.log(error));
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

                        <div>
                            <Link to="/signin">
                                <button onClick={handleSignOut} className="w-full rounded-lg shadow-sm py-2 mt-2 text-center text-white bg-gradient-to-r from-fuchsia-500 to-sky-500" type="button">Sign Out</button>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}