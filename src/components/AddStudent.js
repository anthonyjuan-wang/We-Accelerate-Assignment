import {useState} from 'react';

function AddStudent(props){

const [studentName, setStudentName] = useState('Name of Student');
const [studentFaculty, setStudentFaculty] = useState('Faculty of Student');

    return (
        //Store the new students' info to the list when cick the buttons
     <div>
        <input 
        type="text" 
        value={studentName} onChange={(e) => setStudentName(e.target.value)}
        />
        <input        
        type="text" 
        value={studentFaculty} onChange={(e) => setStudentFaculty(e.target.value)}></input>
        <button 
        onClick={()=> props.handleAddStudent(studentName, studentFaculty)}
        >Add Student</button>
    </div>)
}

export default AddStudent;