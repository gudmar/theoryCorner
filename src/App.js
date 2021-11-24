import './App.css';
import { getTheoryData } from './data/theoryData';
import { getAboutData } from './data/aboutData';
import  Menu  from './components/menu';
import  ContentSection  from './components/contentSection';
// import { BrowserRouter } from "react-router-dom";
import { Outlet, Link, useLocation, useParams } from "react-router-dom";

function getAllPaths(locationDescriptor){
  if (locationDescriptor == undefined) return [];
  if (locationDescriptor == null) return [];
  if (locationDescriptor.pathname == undefined) return [];
  return locationDescriptor.pathname.split('/').slice(1);
}

function isPathNotNestedAndContains(locationDescriptor, pathToMatch){
  let allPaths = getAllPaths(locationDescriptor);
  if (allPaths.length != 1) return false;
  return allPaths[0] === pathToMatch;
}

function concatAllTheoryData(dataAsArrayOfTheoryDataObjects){
  let output = [];
  dataAsArrayOfTheoryDataObjects.forEach(element => {
    output.concat(element.content)
  });
  return output;
}

function getTopicFromTheory(topic){
  let theoryData = concatAllTheoryData(getTheoryData());//getTheoryData();
  for (let item of theoryData){
    if (item.summary === topic) console.log(item)
    if (item.summary === topic) return item.content;
  }
  return {};
}

function doLocationParamsMatch(locationParamsDescriptor, keyToMatch){
  console.log(locationParamsDescriptor)
  console.log(locationParamsDescriptor==undefined)
  console.log(locationParamsDescriptor[keyToMatch])
  if (locationParamsDescriptor == undefined) return false;
  if (locationParamsDescriptor[keyToMatch] == undefined) return false;
  return true;
  // return locationParamsDescriptor[keyToMatch] == keyToMatch;
}


function App(props) {
  let theoryData = getTheoryData();
  let aboutData = getAboutData();
  let location = useLocation();
  let locationParams = useParams();
  console.log(locationParams)
  console.log(location)
  console.log(getAllPaths(location))
  // console.log(theoryData)
  // console.log(aboutData)
  console.log(props)
  console.log(doLocationParamsMatch(locationParams, 'topic'))

  return ( 
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center">Here navigation will be placed</div>
          <Link to="../quiz">
            <button type="button" className="btn btn-primary">Quiz</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4"><Menu menuData={theoryData}/></div>
        <div className="col-sm-8">
          {(location.pathname==='/')?<ContentSection content={aboutData} />:''}
          {isPathNotNestedAndContains(location, 'about')?<ContentSection content={aboutData} />:''}
          {doLocationParamsMatch(locationParams, 'topic')?<ContentSection content={getTopicFromTheory(locationParams.topic)} />:''}
        </div>
          {/* <div className="col-sm-8"><ContentSection content={aboutData}/></div> */}

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
