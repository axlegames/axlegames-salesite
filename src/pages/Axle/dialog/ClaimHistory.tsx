import { CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { brandingColors } from "../../../config/brandingColors";
import { ClaimHistoryResponse } from "../../../services/SaleReferralServices";

const ClaimHistory = (props: ClaimHistoryResponse) => {
  const toast = useToast();
  return (
    <Box>
      <Text
        fontSize={"2xl"}
        fontFamily={`'Russo One', sans-serif`}
        color={brandingColors.primaryTextColor}
        mb={4}
      >
        Claim History
      </Text>
      <TableContainer>
        <Table variant="simple">
          <TableCaption
            fontFamily={"quicksand"}
            fontWeight="bold"
            color={brandingColors.secondaryTwoTextColor}
          >
            *Status will be updated for every 12 hours
          </TableCaption>
          <Thead>
            <Tr>
              <Th
                fontFamily={`'Russo One', sans-serif`}
                color={brandingColors.secondaryTwoTextColor}
              >
                Address
              </Th>
              <Th
                fontFamily={`'Russo One', sans-serif`}
                color={brandingColors.secondaryTwoTextColor}
              >
                Amount
              </Th>
              <Th
                fontFamily={`'Russo One', sans-serif`}
                color={brandingColors.secondaryTwoTextColor}
              >
                Reward
              </Th>
              <Th
                fontFamily={`'Russo One', sans-serif`}
                color={brandingColors.secondaryTwoTextColor}
              >
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.claimHistory.map((referral, index) => (
              <Tr key={index}>
                <Td>
                  {" "}
                  {referral.address.slice(0, 4)}....
                  {referral.address.slice(
                    referral.address.length - 4,
                    referral.address.length
                  )}{" "}
                  <CopyIcon
                    mx={2}
                    cursor={"pointer"}
                    onClick={() => {
                      navigator.clipboard.writeText(referral.address);
                      return toast({
                        title: "Copied",
                        description: referral.address,
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                        position: "top",
                      });
                    }}
                    color={brandingColors.secondaryTextColor}
                  />
                </Td>
                <Td> {referral.amount} </Td>
                <Td>{referral.reward}</Td>
                <Td fontWeight={"bold"}>
                  {" "}
                  {referral.isTransactionDone ? (
                    <Tag
                      color={brandingColors.secondaryTextColor}
                      bg={"green.500"}
                    >
                      COMPLETED
                    </Tag>
                  ) : (
                    <Tag
                      color={brandingColors.secondaryTextColor}
                      bg={"red.500"}
                    >
                      PENDING
                    </Tag>
                  )}{" "}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClaimHistory;
