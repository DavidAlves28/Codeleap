import { Box, Text } from "@chakra-ui/react";
export default function HeaderHome() {
  return (
    <Box background={"#7695EC"} w={["100vw", "100%"]} h="80px">
      <Text
        fontSize={"22px"}
        lineHeight={"26px"}
        fontWeight={"700"}
        color="#ffff"
        p="27px 0 27px 37px"
      >
        CodeLeap Network
      </Text>
    </Box>
  );
}
