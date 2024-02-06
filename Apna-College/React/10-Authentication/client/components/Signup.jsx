

export default function Signup() {
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
                        <h2 className="text-3xl mb-4 font-semibold">Signup Form</h2>

                        <form action="#">

                            <div className="mt-1">
                                <input name="username" className="border border-grey-400 rounded-lg shadow-sm py-2 px-3 w-full" type="text" placeholder="username" />
                            </div>

                            <div className="mt-5">
                                <input name="email" className="border border-grey-400 rounded-lg shadow-sm py-2 px-3 w-full" type="email" autoComplete="off" placeholder="you@email.com" />
                            </div>

                            <div className="mt-5">
                                <input name="password" className="border border-grey-400 rounded-lg shadow-sm py-2 px-3 w-full" type="password" placeholder="******" />
                            </div>

                            <div className="mt-5">
                                <button className="w-full rounded-lg shadow-sm py-2 text-center text-white bg-gradient-to-r from-sky-500 to-fuchsia-500" type="submit">Sign Up</button>
                            </div>

                        </form>

                        <div className="mt-5">
                            <p>Already have an Account?</p>
                            <button className="w-full rounded-lg shadow-sm py-2 mt-2 text-center text-white bg-gradient-to-r from-fuchsia-500 to-sky-500" type="button">Sign In</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}