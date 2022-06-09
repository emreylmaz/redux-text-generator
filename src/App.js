import './App.css';
import {Container} from "@chakra-ui/react";
import TextComponent from "./components/Text";

function App() {
  return (
    <Container maxW={"container.lg"}>
      <TextComponent />
    </Container>
  );
}

export default App;
