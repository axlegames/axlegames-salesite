import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

import Ban from "./banner.webp";

interface Props {
  isOpen: boolean;
  close: Function;
  size?: string;
}

const Banner = (props: Props) => {
  return (
    <Modal
      size={props.size ?? "sm"}
      isOpen={props.isOpen}
      onClose={() => props.close()}
      isCentered={true}
    >
      <ModalOverlay backdropFilter="blur(5px) hue-rotate(0deg)" />
      <ModalContent background={"none"} boxShadow="none">
        <ModalBody>
          <Image
            onClick={() => props.close()}
            cursor={"pointer"}
            src={Ban}
            borderRadius="xl"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Banner;
