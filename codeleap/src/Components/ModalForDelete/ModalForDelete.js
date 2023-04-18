import {
  Box,
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteCareer } from "../../redux/actions";
export default function ModalToDelete(props) {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = props;
   
  const handleDelete = (id) => {    
   dispatch(deleteCareer(id))
  };
  return (
    <Box m="0 auto">
      {/* Button to Delete Card */}
      <RiDeleteBin2Fill
        color="#FFFF"
        size="25px"
        onClick={onOpen}
        cursor={"pointer"}
      />

      <Modal size={["", "2xl"]} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="100vw">
          <ModalHeader>Are you sure you want to delete this item?</ModalHeader>
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
              background={"#FF5151"}
              mr={3}
              color="#FFFF"
              _hover={"none"}
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
