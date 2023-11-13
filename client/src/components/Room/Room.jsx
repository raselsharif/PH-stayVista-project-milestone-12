import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
const Room = () => {
  const [rooms, setRooms] = useState([]);
  console.log(rooms);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filteredRoom = data.filter(
            (room) => room.category === category
          );
          setRooms(filteredRoom);
        } else {
          setRooms(data);
        }
      });
  }, [category]);
  return (
    <Container>
      {rooms.length == 0 ? (
        <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
          <Heading
            title={"No room available"}
            subtitle={"Find another category"}
            center={true}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Room;
