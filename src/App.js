import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeachersList from './components/TeachersList';
import StudentsList from './components/StudentsList'
import MarkingsLists from './components/MarkingsLists';
import ButtonMenu from './components/ButtonMenu';

function App({ message }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <ButtonMenu />
        <TeachersList/>
        <StudentsList/>
        <MarkingsLists/>
      </header>
    </div>
  );
}

export default App;
