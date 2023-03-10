import { Button } from "@chakra-ui/react";
import { brandingColors } from "../../../config/brandingColors";

interface Props {
  shadow: string;
  bg: string;
  onClick: Function;
  label: string;
  width?: string;
}

const NeuButton = (props: Props) => {
  const normalEffect = `4px 4px 8px ${brandingColors.bgColor}, -2px -2px 4px ${props.shadow}`;
  const pushedEffect = `2px 2px 4px ${props.shadow}, -4px -4px 8px ${brandingColors.bgColor}`;

  return (
    <Button
      fontFamily={`'Russo One', sans-serif`}
      boxShadow={normalEffect}
      width={props.width || "auto"}
      bg={props.bg}
      size={{ base: "sm", md: "md" }}
      color={brandingColors.secondaryTextColor}
      onClick={() => props.onClick()}
      _hover={{
        boxShadow: pushedEffect,
        transition: "200ms all ",
      }}
      _active={{
        boxShadow: pushedEffect,
        transition: "200ms all ",
      }}
    >
      {props.label}
    </Button>
  );
};

export default NeuButton;
