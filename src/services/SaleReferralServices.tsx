import axios from "axios";
import { salePrefix } from "./httpConfig";

export interface Resp {
  refCode: string;
}

export interface ReferralBuyEntryResponse {
  isRecorded: boolean;
  error: boolean;
}

export interface ClaimHistoryInterface {
  address: string;
  isTransactionDone: boolean;
  amount: number;
  hash: string;
}

export interface ClaimHistoryResponse {
  claimHistory: Array<ClaimHistoryInterface>;
  error: boolean;
}

export class SaleReferralServices {
  static setAddress = async (address: string): Promise<Resp> =>
    await (
      await axios.post(`${salePrefix}/create`, { address: address })
    ).data;

  static updateReferralBuyEntry = async (
    address: string,
    refCode: string,
    hash: string,
    bnb: number
  ): Promise<ReferralBuyEntryResponse> =>
    await (
      await axios.post(`${salePrefix}/update`, {
        refCode: refCode,
        hash: hash,
        address: address,
        amount: bnb,
      })
    ).data;

  static getClaimHistory = async (
    refCode: string
  ): Promise<ClaimHistoryResponse> =>
    await (
      await axios.post(`${salePrefix}/claim-history`, {
        refCode: refCode,
      })
    ).data;
}
