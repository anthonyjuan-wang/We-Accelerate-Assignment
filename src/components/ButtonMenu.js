import {Button} from "react-bootstrap"
import {ButtonGroup} from "react-bootstrap"
import TeachersList from "./TeachersList";

function ButtonMenu()
{
    return(
    <div>
        <ButtonGroup vertical>
            <Button variant="secondary"
            >Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
        </ButtonGroup>
    </div>
)
}

export default ButtonMenu;