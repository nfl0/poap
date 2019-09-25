export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Address = string;

export interface TokenInfo {
  tokenId: string;
  owner: Address;
  event: PoapEvent;
}

export interface PoapEvent {
  id: number;
  fancy_id: string;
  signer: Address;
  signer_ip: string;
  name: string;
  description: string;
  city: string;
  country: string;
  event_url: string;
  image_url: string;
  year: number;
  start_date: string;
  end_date: string;
}

export interface PoapTransaction {
  id: number;
  tx_hash: string;
  nonce: number;
  operation: string;
  arguments: string;
  created_date: string;
}

export interface PoapSetting {
  id: number;
  name: string;
  type: string;
  value: string;
}

export interface Claim extends ClaimProof {
  claimerSignature: string;
}

export interface ClaimProof {
  claimId: string;
  eventId: number;
  claimer: Address;
  proof: string;
}

export interface Vote extends POAPVote {
  claimerSignature: string;
}

export interface POAPVote {
  claimer: Address;
  proposal: number;
}
