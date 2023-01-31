import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import UpdateAuthor from './components/UpdateAuthor';
import AuthorForm from './components/AuthorForm';




const App = () => {

    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/authors/new" element = {<AuthorForm/>}/>
            <Route path="/authors/edit/:id" element={<UpdateAuthor/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  
}

export default App;
