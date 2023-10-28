import { TxHistory } from "./History"
import { WithdrawalList } from "./widthrawn"
import { StakingContainer } from "./stake"
import { MyInvestment } from "./invest"

export const Portfolio = () => {

  return (
    <div className="px-8 py-6">
      <div className="w-full grid grid-cols-12 gap-6">
        <div className="col-span-6 py-8 px-10 border border-border-outline shadow-1 rounded-[24px]">
          <StakingContainer />
        </div>
        <div className="col-span-6 py-8 px-10 border border-border-outline shadow-1 rounded-[24px]">
          <MyInvestment />
        </div>
        <div className="col-span-6 py-8 px-10 border border-border-outline shadow-1 rounded-[24px]">
          <TxHistory />
        </div>
          <div className="col-span-6 py-8 px-10 border border-border-outline shadow-1 rounded-[24px]">
            <WithdrawalList />
          </div>
      </div>
    </div>
  )
}