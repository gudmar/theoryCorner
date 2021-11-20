import './App.css';
import { getTheoryData } from './data/theoryData';
import { getAboutData } from './data/aboutData';
import  Menu  from './components/menu';
import  ContentSection  from './components/contentSection';


function App() {
  let theoryData = getTheoryData();
  let aboutData = getAboutData();
  console.log(theoryData)
  console.log(aboutData)
  return ( 
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center">Here navigation will be placed</div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4"><Menu menuData={theoryData}/></div>
        <div className="col-sm-8"><ContentSection content={aboutData}/></div>
      </div>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
