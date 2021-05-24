import './RoomItem.css';
import { Link } from 'react-router-dom';
import Card from './Card';


const RoomItem = (props) => {


  // const roomTitle = 'Room';
  // const roomNavigation= 'Create/Edit';
  // const roomDelete = 'Delete';



  return (

      <Card className='room-item'>
        <div>
          <h2>{props.title}</h2>
        </div>
        <nav>
        <ul>
        <li>
          <Link to='/CreateEditPage'>
            <div className='room-item__slash'>
              <h2>{props.navigation}</h2>
            </div>
          </Link>
        </li>
        <li>
          <div>
            <h2>{props.delete}</h2>
          </div>
        </li>
        </ul>
        </nav>

      </Card>
  );
}

export default RoomItem;
