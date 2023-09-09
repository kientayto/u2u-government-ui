import { BigNumber } from "ethers"

export interface StakingStats {
  totalSelfStaked: BigNumber
  totalDelegated: BigNumber
  totalStaked: BigNumber
  totalValidator: number
  totalDelegator: number
}

export interface Validator {
  valId: string
  name: string
  auth: string
  createdEpoch: string
  createdTime: string
  active?: boolean
  online?: boolean
  delegatedAmount: BigNumber
  selfStakedAmount: BigNumber
  totalStakedAmount: BigNumber
  totalClaimedRewards: BigNumber
  downTime?: string
  lockedUntil?: string
  lockDays?: string
  delegations?: Delegation[]
  votingPower?: number
}

export interface Validation {
  id: string
  validator: Validator
  stakedAmount: BigNumber
}

export interface Delegation {
  id: string
  validatorId: string
  delegatorAddress: string
  delegator: Delegator
  stakedAmount: BigNumber
  totalClaimedRewards: BigNumber
} 

export interface Delegator {
  id: string
  address: string
  stakedAmount: BigNumber
  createdOn: number
  validations?: Validation[]
  totalClaimedRewards: BigNumber
}

export interface WithdrawalRequest {
  wrId: string
  delegatorAddress: string
  validatorId: string
  unbondTime: number
  unbondingAmount: BigNumber
  withdrawalAbleTime: number
  withdrawable: boolean
  withdrawalAmount: BigNumber
  undelegateHash: string
  withdrawalHash: string
  withdrawalTime: number
  withdrawal: boolean
}

export interface LockedStake {
  delegator: string
  validatorId: string
  duration: number
  endTime: number
  lockedAmount: BigNumber
  penalty: BigNumber
  isLockedUp: boolean
}