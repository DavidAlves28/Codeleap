import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { EditCareer } from "../../redux/actions";

export default function ModalToEdit(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user} = props;
  const dispatch = useDispatch();
  // state for show Alert
  const [error, setError] = useState("");
  
  // State to inputs
  const [form, setForm] = useState({
    id:user.id,
    username:user.username ,
    title: "",
    content: "",
  });
  const { id,title, content } = form;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e, ) => {
    e.preventDefault();
    if (!title || !content) {
      setError("error");
    } else {
      dispatch(EditCareer(id));
      setError("");
      setForm({
        title: "",
        content: "",
      });
    }
  };
console.log(form);
  return (
    <>
      {/* Button to Edit Card */}
      <FaEdit color="#FFFF" size="22px" onClick={onOpen} cursor={"pointer"} />

      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                value={title}
                name="title"
                onChange={handleInputChange}
                placeholder="Hello World"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Content</FormLabel>
              <Textarea
                value={content}
                name="content"
                onChange={handleInputChange}
                maxH="74px"
                placeholder="Conten here"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter gap={"16px"}>
            <Button
              border="1px solid #000000"
              rounded={"8px"}
              w="120px"
              h="32px"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              rounded={"8px"}
              w="120px"
              h="32px"
              background={"#47B960"}
              mr={3}
              color="#FFFF"
              _hover={"none"}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
