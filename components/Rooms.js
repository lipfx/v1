
import RoomItem from './RoomItem';
import Card from './Card';
import './Rooms.css';

const Rooms = (props) => {
  return (
    <Card className="rooms">
      <RoomItem
        title={props.items[0].title}
        delete={props.items[0].delete}
        navigation={props.items[0].navigation}
      />
    <RoomItem
        title={props.items[1].title}
        delete={props.items[0].delete}
        navigation={props.items[0].navigation}
      />
    <RoomItem
        title={props.items[2].title}
        delete={props.items[0].delete}
        navigation={props.items[0].navigation}
      />
    </Card>
  );
}

export default Rooms;
