import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
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
import { EditCareer, loadUsers } from "../../redux/actions";

export default function ModalToEdit(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = props;
  const dispatch = useDispatch();

  // State to inputs
  const [form, setForm] = useState({
    id: user.id,
    username: user.username,
    title: user.title,
    content: user.content,
  });

  const { title, content } = form;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (id, form) => {
    dispatch(EditCareer(id, form));
    setForm({
      id: user.id,
      username: user.username,
      title: "",
      content: "",
    });
  };

  return (
    <>
      {/* Button to Edit Card */}
      <FaEdit color="#FFFF" size="22px" onClick={onOpen} cursor={"pointer"} />

      <Modal size={["md", "2xl"]} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                value={title || ""}
                name="title"
                onChange={handleInputChange}
                placeholder="Hello World"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Content</FormLabel>
              <Textarea
                value={content || ""}
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

            {/*  if the title or content is empty , the 'save' button will not work */}
            {title === "" || content === "" ? (
              <Button
                rounded={"8px"}
                w="120px"
                h="32px"
                background={"#47B960"}
                mr={3}
                color="#FFFF"
                _hover={"none"}
              >
                Save
              </Button>
            ) : (
              <Button
                rounded={"8px"}
                w="120px"
                h="32px"
                background={"#47B960"}
                mr={3}
                color="#FFFF"
                _hover={"none"}
                onClick={() => {
                  handleSubmit(user.id, form);
                  // close Modal
                  onClose();
                  dispatch(loadUsers());
                }}
              >
                Save
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
