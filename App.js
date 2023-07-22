/*import './App.css';
import {NavBar} from './myComponent/navBar';
function App() {
  return (
    <>
      <NavBar name="prakhar sharma"/>
    </>
  );
}
export default App;*/
import './App.css';
import {NavBar} from './myComponent/navBar';
import {NavBar1} from './myComponent/byme';
function App() {
  let name1="prakhar";
  let name2="arush";

  return (
    <>
      <NavBar name={name1} name1={name2}/>
      <NavBar1/> {/*navbar1 is the name of the fuction in the component - byme*/}       
    </>
   
  );
}
export default App;


