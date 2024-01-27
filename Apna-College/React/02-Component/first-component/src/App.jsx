import './App.css';

import Description from "./Description.jsx";
// import Des from "./Description.jsx";     // name can be changed  // In App component use <Des/>

// import { Description } from "./Description.jsx";


function Title() {
  return <h1>I am the Title</h1>;
}


function App() {

  let name = "abc";

  return (          // Always return single component

    <div>
      
      <p>Hi, {name.toUpperCase()}</p>

      <h1>This is my App component</h1>
      <p>Inside app component, we have:</p>

      <Title/>
      <Description/>
      <Title/>
      <Description/>

    </div>          // use empty tags (<> </>) as shown below, Do NOT create extra node(div)
  );

  /* OR
  return (
    <>
      <Title/>
      <Title/>
    </>
  );
  */

  /* OR
  return <Title/>;
  */

  /* OR
  return (
    <Title/>
  );
  */

}

export default App
