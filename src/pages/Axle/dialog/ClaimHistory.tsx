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
} from "@chakra-ui/react";
import { brandingColors } from "../../../config/brandingColors";
import { ClaimHistoryResponse } from "../../../services/SaleReferralServices";

const ClaimHistory = (props: ClaimHistoryResponse) => {
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
            Status will be updated for every 12 hours
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
                Txn Hash
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
              <Tr>
                <Td>
                  {" "}
                  {referral.address.slice(0, 4)}....
                  {referral.address.slice(
                    referral.address.length - 4,
                    referral.address.length
                  )}{" "}
                </Td>
                <Td> {referral.amount} </Td>
                <Td>
                  {" "}
                  {referral.hash.slice(0, 4)}....
                  {referral.hash.slice(
                    referral.hash.length - 4,
                    referral.hash.length
                  )}{" "}
                </Td>
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
