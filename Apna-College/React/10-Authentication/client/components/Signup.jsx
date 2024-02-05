

export default function Signup() {
    return (
        <div className="">

            <h2 className="">Signup Form</h2>

            <form className="">

                <label className=""htmlFor="username">Username:</label>
                <input className="" type="text" placeholder="username" />

                <label className="" htmlFor="email">Email:</label>
                <input className="" type="email" autoComplete="off" placeholder="you@email.com"/>

                <label className="" htmlFor="password">Password:</label>
                <input className="" type="password" placeholder="******"/>

                <button className="" type="submit">Sign Up</button>

            </form>

        </div>
    );
}