import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import Calender from "./Calender";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const filteredRoom = data.find((room) => room._id === id);
        setRoom(filteredRoom);
        setLoading(false);
      });
  }, [id]);
  // console.log(room);
  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <div>
        <div>
          <Header roomData={room} />
        </div>
        <div>
          <div>
            <RoomInfo roomData={room} />
          </div>
          <div>
            {/* <Calender /> */}
            {/* <RoomReservation roomData={room} /> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
