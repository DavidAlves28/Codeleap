import { Box } from "@chakra-ui/react";
import HeaderHome from "../Components/Header/Header";
import CardPosted from "../Components/CardPosted/CardPosted";
import CardToCreate from "../Components/CardToCreate/CardToCreate";




export default function HomePage() {
  
  return (
    <Box w="100vw" minH='100vh' background={"#DDDDDD"}>
      <Box
        m="0 auto"
        background={"#FFFFFF"}
        w={['100vw',"800px"]}
        h='90%'
      >
        <HeaderHome />
        {/* Card to create post  */}
        <CardToCreate />
        {/* Card posted, Card edit */}
       <CardPosted/>
      </Box>
    </Box>
  );
}

// const mapStateToProps