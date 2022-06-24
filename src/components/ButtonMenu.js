import {Button} from "react-bootstrap"
import {ButtonGroup} from "react-bootstrap"
import TeachersList from "./TeachersList";

function ButtonMenu()
{
    return(
    <div>
        <ButtonGroup vertical>
            <Button variant="secondary">Teachers List</Button>
            <Button variant="secondary">Student List</Button>
            <Button variant="secondary">Markings List</Button>
        </ButtonGroup>
    </div>
)
}

export default ButtonMenu;
