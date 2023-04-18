import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import ModalToEdit from "../ModalToEdit/ModalToEdit";
import ModalToDelete from "../ModalToDelete/ModalToDelete";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../../redux/actions";
import { useParams } from "react-router-dom";

export default function CardPosted() {
  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { userName } = useParams();

  //returns the data of the created post
  const returnIdToUserName =
    users &&
    users.filter((user) => {
      if (user.username === userName) {
        return user;
      }
    });


  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  const DateNow = new Date();
  const date = {
    days: DateNow.getDay(),
    hours: DateNow.getHours(),
    minutes: DateNow.getMinutes(),
  };

  return (
    <>
      {users &&
        users.map((info) => {
          const minutesAgoOrder = JSON.stringify(
            info.created_datetime.slice(14, 16) - date.minutes
          );
          const minutesAgo = JSON.stringify(
            date.minutes - info.created_datetime.slice(14, 16)
          );

          return (
            <Box
              w={["99vw", "752px"]}
              m={"0 auto"}
              minH={["", "320px"]}
              rounded={"16px "}
              border="1px solid #999999"
              marginTop={"24px"}
              key={info.id}
            >
              <Stack
                rounded={"16px 16px 0 0 "}
                background={"#7695EC"}
                w={["", "100%"]}
                h="80px"
              >
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Text
                    fontSize={"22px"}
                    m="24px 0 24px 24px"
                    fontWeight={"semibold"}
                    color={"#FFFF"}
                    overflow={"hidden"}
                  >
                    {info.title}
                  </Text>

                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap="34px"
                    mr="12px"
                  >
                    {/* button to delete */}
                    {returnIdToUserName.map((user) => {
                      
                      if (user.title === info.title) {
                        return <ModalToDelete key={user.id} user={user} />;
                      }
                    })}
                    {/* button to edit */}
                    {returnIdToUserName.map((user) => {
                      if (user.title === info.title) {
                        return <ModalToEdit key={user.id} user={user} />;
                      }
                    })}
                  </Flex>
                </Flex>
              </Stack>

             
                <Flex
                  textColor={"grey"}
                  fontSize={"18px"}
                  lineHeight={"21px"}
                  fontWeight={"bold"}
                  mt={"24px"}
                  h={"100%"}
                  justifyContent={"space-between"}
                >
                  {/* name  to user posted */}
                  <Text overflow={"hidden"} ml="24px">
                    @{info.username}
                  </Text>
                  {/* Datatime to posted  */}
                  <Text mr="24px">
                    {minutesAgo.includes("-") ? minutesAgoOrder : minutesAgo}{" "}
                    minutes ago
                  </Text>
                </Flex>
                <Box minH="100%">
                  {/*  content posted */}
                  <Text
                    
                    m="16px 24px 24px 24px "
                    fontWeight={"semibold"}
                    fontSize={"18px"}
                    textAlign={"left"}
                   
                  >
                    {info.content}
                  </Text>
                </Box>
             
            </Box>
          );
        })}
    </>
  );
}
