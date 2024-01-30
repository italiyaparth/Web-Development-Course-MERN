function handleFormSubmit(event) {
    event.preventDefault();     // if don't use it then after one time submission, form will be re-rendered
    console.log("Form was submitted!");
}

export default function EventObject() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write something"/>
            <button>Submit</button>
        </form>
    );
}