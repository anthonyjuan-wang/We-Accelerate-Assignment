import {useEffect, useState} from 'react';
import StudentsListItem from './StudentsListItem';
import AddStudent from './AddStudent';

//The function which is used to display teachers' list
function StudentsList(){
    const [students, setStudents] = useState([]);

    //Fetch data from backend
    useEffect( () => {
        fetch('https://student-grading-backend.herokuapp.com/api/students')
        .then( (res) => res.json() )
        .then( (data) => setStudents(data));
    }, []);
        return(
        //Add new teachers' info to the list
        <>
        <h2>Students:</h2>
        {students.map( (student) => <StudentsListItem key={student.id} id={student.id} name={student.name} faculty={student.faculty}/>)}
        <AddStudent handleAddStudent={(studentName, studentFaculty)=>{
            const newTeacherList = [...students, {id: students.length+=1,
            name: studentName,
            faculty: studentFaculty}]
            setStudents(newTeacherList);
        }}/>
        </>
    )
}

export default StudentsList;