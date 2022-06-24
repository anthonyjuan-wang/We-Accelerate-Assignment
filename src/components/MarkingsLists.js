import {useEffect, useState} from 'react';
import MarkingsListItem from './MarkingsListItem';

//The function which is used to display markings' list
function MarkingsLists(){
    const [markings, setMarkings] = useState([]);

    //Fetch data from backend
    useEffect( () => {
        fetch('https://student-grading-backend.herokuapp.com/api/markings')
        .then( (res) => res.json() )
        .then( (data) => setMarkings(data));
    }, []);
        return(
        //Iterating through all markings
        <>
        <h2>Markings:</h2>
        {markings.map( (marking) => <MarkingsListItem key={marking.id} id={marking.id} studentId={marking.studentId} 
        teacherId={marking.teacherId} grade={marking.grade} commentFromProf={marking.commentFromProf}/>)}
        </>
    )
}

export default MarkingsLists;