import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeachersList from './components/TeachersList';
import StudentsList from './components/StudentsList'
import MarkingsLists from './components/MarkingsLists';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App({ message })  {
  return (
  <Router>
    <div className="App">
      <ul className="App-header">
      <h1>{message}</h1>
      <li>
        <Link to="/TeachersList">Teachers' List</Link>
      </li>
      <li>
        <Link to="/StudentsList">Students' List</Link>
      </li>
      <li>
        <Link to="/MarkingsLists">Markings</Link>
      </li>
      <Routes>
        <Route exact path='/TeachersList' element={< TeachersList />}></Route>
        <Route exact path='/StudentsList' element={< StudentsList />}></Route>
        <Route exact path='/MarkingsLists' element={< MarkingsLists />}></Route>
      </Routes>
     </ul> 
    </div>
  </Router>

  );
}

export default App;
