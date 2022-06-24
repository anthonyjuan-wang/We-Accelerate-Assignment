import {useEffect, useState} from 'react';
import TeachersListItem from './TeachersListItem';
import AddTeacher from './AddTeacher';

//The function which is used to display teachers' list
function TeachersList(){
    const [teachers, setTeachers] = useState([]);

    //Fetch data from backend
    useEffect( () => {
        fetch('https://student-grading-backend.herokuapp.com/api/teachers')
        .then( (res) => res.json() )
        .then( (data) => setTeachers(data));
    }, []);
        return(
        //Add new teachers' info to the list
        <>
        <h2>Teachers:</h2>
        {teachers.map( (teacher) => <TeachersListItem key={teacher.id} id={teacher.id} name={teacher.name} faculty={teacher.faculty}/>)}
        <AddTeacher handleAddTeacher={(teacherName, teacherFaculty)=>{
            const newTeacherList = [...teachers, {id: teachers.length+=1,
            name: teacherName,
            faculty: teacherFaculty}]
            setTeachers(newTeacherList);
        }}/>
        </>
    )
}

export default TeachersList;