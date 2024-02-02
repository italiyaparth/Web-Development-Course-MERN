import './App.css';
import FormSingleInput from "./FormSingleInput.jsx";
import FormMultipleInput from "./FormMultipleInput.jsx";
import CommentsForm from "./CommentsForm.jsx";
import Jokes from "./Jokes.jsx";

function App() {
 
  return (
    <> 
      <h3>Form Single Input</h3>
      <FormSingleInput />
      <hr />

      <h3>Form Multiple Input</h3>
      <FormMultipleInput />
      <hr />

      <h3>Comments Form</h3>
      <CommentsForm />
      <hr />

      <h3>Jokes</h3>
      <Jokes />
    </>
  )
}

export default App
