import { useTranslation } from "react-i18next";
import { Box, Button, RenderNumberFormat, StakingCalculator, ValidatorList, buttonScale } from "../../components";
import { useBalance, useEpochRewards, useFetchAllValidator, useFetchStakingStats, useTotalSupply } from "../../hooks";
import { useMemo } from "react";
import { bigFormatEther, shortenDisplayNumber } from "../../utils";
// import ArrowIcon from "../../images/icons/arrow-left.png"
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { t } = useTranslation();
  const { stakingStats } = useFetchStakingStats()
  const { validators } = useFetchAllValidator()
  const { balance } = useBalance()
  const { supply } = useTotalSupply()
  const { totalStaked } = useMemo(() => stakingStats, [stakingStats])
  const navigate = useNavigate()
  const { rewardsPerEpoch } = useEpochRewards()

  return (
    <div>
      <Box className="flex flex-wrap items-center md:justify-around md:gap-12 gap-y-6 text-left md:text-center">
        <div className="w-6/12 md:w-fit md:mx-4 text-left">
          <div className="md:text-base text-sm md:font-medium text-gray mb-2">{t('Total Supply (U2U)')}</div>
          <div className="md:text-2xl text-sm text-black font-bold">10B U2U</div>
        </div>
        <div className="w-6/12 md:w-fit md:mx-4">
          <div className="md:text-base text-sm md:font-medium text-gray mb-2">{t('Market Cap (USD)')}</div>
          <div className="md:text-2xl text-sm text-black font-bold">-</div>
        </div>
        <div className="w-6/12 md:w-fit md:mx-4">
          <div className="md:text-base text-sm md:font-medium text-gray mb-2">{t('Circulating Supply (U2U)')}</div>
          <div className="md:text-2xl text-sm text-black font-bold">
            {shortenDisplayNumber(supply)}
          </div>
        </div>
        <div className="w-6/12 md:w-fit md:mx-4">
          <div className="md:text-base text-sm md:font-medium text-gray mb-2">{t('Epoch Reward (U2U)')}</div>
          <div className="md:text-2xl text-sm text-black font-bold">
          <RenderNumberFormat amount={rewardsPerEpoch} className="mr-2" fractionDigits={2} />
          </div>
        </div>
      </Box>
      <Box className="md:flex items-start justify-center gap-16 text-left md:text-center my-10" variant="transparent">
        <div className="md:hidden w-[50px] h-[2px] bg-green mb-8"></div>
        <div className="mb-6">
          <div className="md:font-bold text-sm md:text-base text-gray">Total staked amount (U2U)</div>
          <div className="font-bold text-black text-[36px] md:text-[40px]">
            {shortenDisplayNumber(bigFormatEther(totalStaked))}
          </div>
        </div>
        <div>
          <div className="md:font-bold text-sm md:text-base text-gray">Total staked market value (USD)</div>
          <div className="font-bold text-black text-[36px] md:text-[40px]">-</div>
        </div>
      </Box>
      <Box variant="gradient">
        <div className="md:py-[32px] py-10 md:text-center text-left">
          <div className="md:hidden w-[50px] h-[2px] bg-green mb-6"></div>
          <div className="text-[26px] text-black-2">Validators: The Backbone of U2U's Network</div>
          <div className="text-base text-gray">Validators are the cornerstone of U2U's network. They play a pivotal role in U2U distributed network by processing transactions and realtime participating in consensus mechanisms. This active involvement contributes significantly to making U2U the most censorship-resistant and one of the highest-performing blockchain networks in the world.</div>
          <div className="text-2xl text-black-2 mt-10">Delegators: Powering Network Validation</div>
          <div className="text-base text-gray">Delegators play a vital role in the validation process and are duly rewarded for their contribution to securing the network. Their role involves staking U2U Token by delegating them to validator nodes, thus fortifying the network's reliability and integrity.</div>
          <div className="text-2xl text-black-2 mt-10">Epoch Rewards: Fostering Network Security</div>
          <div className="text-base text-gray">Epoch rewards represent a critical component of our network. These rewards are drawn from our reserve and serve as a strong incentive for validators to join us in safeguarding the network. The rewards are distributed at the end of each epoch, and each epoch spans a duration of  7 minutes.</div>
          <div className="mt-10 flex justify-center">
            <Button scale={buttonScale.lg} className="w-[500px]" onClick={() => navigate("/validator/register")}>Become a Validator</Button>
          </div>
        </div>
      </Box>
      <div className="flex justify-center mt-10">
        <StakingCalculator validators={validators} balance={balance} />
      </div>
      <div className="flex justify-between items-center mb-6 mt-10">
        <div className="text-[26px]">{`${t('Validator List')} (${stakingStats.totalValidator})`}</div>
        {/* <div className="text-base inline text-green font-medium cursor-pointer flex items-center gap-2">
          See more
          <img src={ArrowIcon} alt="u2u" />
        </div> */}
      </div>
      <div>
        <ValidatorList validators={validators} />
      </div>
    </div>
  )
}