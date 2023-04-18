import { Box, Button, Card, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { goToHome } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [nameUser, setNameUser] = useState("");
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    setNameUser(e.target.value);
  };

  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w="100vw"
      h="100vh"
      background="#DDDDDD"
    >
      <Card
        h={["30vh", "205px"]}
        w={["90%", "500px"]}
        boxShadow="base"
        rounded="16px"
        backgroundColor="#ffffff"
      >
        <Box margin="24px 0 24px 24px">
          <Text fontSize={"22px"} fontWeight={"bold"}>
            Welcome to CodeLeap network!
          </Text>
          <Text marginTop="8px">Please enter your username</Text>

          <Flex flexDir={"column"} w={["90%", "452px"]} alignItems={"end"}>
            <Input
              h="32px"
              marginTop="8px"
              border="1px solid #777777"
              placeholder="John doe "
              onChange={handleOnClick}
            />
            {nameUser.length >= 3 ? (
              <Button
                background={" #7695EC"}
                color="#ffff"
                _hover="none"
                rounded={"8px"}
                m="18px 0 0 0"
                width="111px"
                onClick={() => goToHome(navigate, nameUser)}
              >
                ENTER
              </Button>
            ) : (
              <Button
                background={" #7695EC"}
                color="#ffff"
                _hover="none"
                rounded={"8px"}
                m="18px 0 0 0"
                width="111px"
              >
                ENTER
              </Button>
            )}
          </Flex>
        </Box>
      </Card>
    </Stack>
  );
}
