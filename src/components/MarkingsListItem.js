//Import dependencies from react and bootstrap
import{useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap"

function MarkingsListItem({id, studentId, teacherId, grade, commentFromProf}){

    const [details, setDetails] = useState(null);

    return(
        //Display the information when the button is clicked.
        <div>
            <Button onClick={
                 () => {
                    fetch(
                        `https://student-grading-backend.herokuapp.com/api/markings/students/${studentId}`
                    )
                    .then( (res) => res.json() )
                    .then( (res) => setDetails(res));
                }
            }
            variant="warning" 
            size="lg"
            >Student's Id: {studentId}</Button>{''}
            {details && <div>
                <div>Markings ID: {id}</div>
                <div>Teacher's ID: {teacherId}</div>
                <div>Grade: {grade}</div>
                <div>Comment From Teacher: {commentFromProf}</div>
                </div>}
        </div>
    );
}

export default MarkingsListItem;