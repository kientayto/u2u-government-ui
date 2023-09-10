import { useEffect, useState } from "react"
import { WithdrawalRequest } from "../../types"
import { useRefresh } from "../useRefresh"
import { QueryService } from "../../thegraph"
import { DataProcessor } from "./dataProccesser"

export const useFetchWithdrawRequest = (delegatorAddr: string, validatorId: number) => {
  const [wr, setWr] = useState<WithdrawalRequest[]>([])
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    if (!delegatorAddr || !validatorId) return
    (async () => {
      const { data } = await QueryService.queryWithdrawalRequest(delegatorAddr, validatorId)
      if (data && data.withdrawalRequests.length > 0) {
        setWr(data.withdrawalRequests.map((i: any) => DataProcessor.withdrawalRequest(i)))
      }
    })()
  }, [slowRefresh, delegatorAddr, validatorId])
  return {
    wr
  }
}