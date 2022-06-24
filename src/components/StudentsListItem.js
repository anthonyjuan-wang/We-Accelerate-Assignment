//Import dependencies from react and bootstrap
import{useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap"

function StudentsListItem({name, id, faculty}){

    const [details, setDetails] = useState(null);

    return(
        //Display the information when the button is clicked.
        <div>
            <Button onClick={
                 () => {
                    fetch(
                        `https://student-grading-backend.herokuapp.com/api/students/${id}`
                    )
                    .then( (res) => res.json() )
                    .then( (res) => setDetails(res));
                }
            }
            variant="warning" 
            size="lg"
            >Student's Name: {name}</Button>{''}
            {details && <div>
                <div>ID: {id}</div>
                <div>Faculty: {faculty}</div>
                </div>}
        </div>
    );
}

export default StudentsListItem;