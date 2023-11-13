import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";

const RoomDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Container>
      <div>
        <h2>{id}</h2>
      </div>
    </Container>
  );
};

export default RoomDetails;
