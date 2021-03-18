
import './App.css';
//import ImageGrid from './comps/ImageGrid';
import NavSearchBar from './comps/NavSearchBar.js'
import TrabajosGrid from './comps/TrabajosGrid';
import UploadForm from './comps/UploadForm.js'
function App() {
  return (
    <div className='App'>
      <NavSearchBar/>   
      <UploadForm/>
      {//<ImageGrid/>
      }
      <TrabajosGrid className="trabajos-container"/>
    </div>
         
  );
}

export default App;
