import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createCareers } from "../../redux/actions";

export default function CardToCreate() {
  const { userName } = useParams();
  // dispatch to redux
  const dispatch = useDispatch();
  // state for show Alert
  const [error, setError] = useState("");

  // State to inputs
  const [form, setForm] = useState({
    username: userName,
    title: "",
    content: "",
  });
  const { title, content } = form;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError("error");
    } else {
      dispatch(createCareers(form));
      setError("");
      setForm({
        username: userName,
        title: "",
        content: "",
      });
    }
  };
  return (
    <Box
      w={["98vw", "752px"]}
      rounded={"16px"}
      m={["0 auto"]}
      minH="344px"
      border="1px solid #999999"
      marginTop={"24px"}
    >
      <Flex margin={"24px 24px 0 24px"} flexDir={"column"}>
        <Heading fontSize={"22px"} fontWeight={"700"} lineHeight={"26px"}>
          What’s on your mind?
        </Heading>

        <Text fontSize={"16px"} fontWeight={"semibold"} marginTop="24px">
          Title
        </Text>

        <Input
          value={title}
          name="title"
          onChange={handleInputChange}
          type="text"
          border="1px solid #777777"
          rounded={"8px"}
          marginTop={"8px"}
          w={["100%", "704px"]}
          placeholder="Hello world"
        />
        <Text fontSize={"16px"} fontWeight={"semibold"} marginTop="24px">
          Content
        </Text>
        <Textarea
          value={content}
          name="content"
          onChange={handleInputChange}
          placeholder="Content here"
          maxH="65px"
          border="1px solid #777777"
          rounded={"8px"}
          mt={"8px"}
          mb="5px"
          w={["100%", "704px"]}
        />

        <Button
          background={" #7695EC"}
          color="#ffff"
          _hover="none"
          rounded={"8px"}
          m="10px 0px 0 0"
          w="120px"
          h="32px"
          alignSelf={"end"}
          onClick={handleSubmit}
        >
          Create
        </Button>
      </Flex>
      {error && (
        <Alert rounded={"16px"} p={1} mt={2} status="error">
          <AlertIcon />
          <AlertTitle>Please fill in the fields</AlertTitle>
        </Alert>
      )}
    </Box>
  );
}
