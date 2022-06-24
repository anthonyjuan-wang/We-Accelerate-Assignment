import {useState} from 'react';

function AddTeacher(props){

const [teacherName, setTeacherName] = useState('Name of Teacher');
const [teacherFaculty, setTeacherFaculty] = useState('Faculty of Teacher');

    return (
        //Store the new teachers' info to the list when cick the buttons
     <div>
        <input 
        type="text" 
        value={teacherName} onChange={(e) => setTeacherName(e.target.value)}
        />
        <input        
        type="text" 
        value={teacherFaculty} onChange={(e) => setTeacherFaculty(e.target.value)}></input>
        <button 
        onClick={()=> props.handleAddTeacher(teacherName, teacherFaculty)}
        >Add teacher</button>
    </div>)
}

export default AddTeacher;