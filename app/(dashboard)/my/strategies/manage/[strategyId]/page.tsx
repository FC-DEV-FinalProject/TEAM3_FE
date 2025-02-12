'use client'

import AnalysisContainer from '@/app/(dashboard)/_ui/analysis-container'
import DetailsInformation from '@/app/(dashboard)/_ui/details-information'
import DetailsSideItem, {
  InformationModel,
  TitleType,
} from '@/app/(dashboard)/_ui/details-side-item'
import SubscriberItem from '@/app/(dashboard)/_ui/subscriber-item'
import useGetDetailsInformationData from '@/app/(dashboard)/strategies/[strategyId]/_hooks/query/use-get-details-information-data'
import SideContainer from '@/app/(dashboard)/strategies/_ui/side-container'
import classNames from 'classnames/bind'

import { Button } from '@/shared/ui/button'
import BackHeader from '@/shared/ui/header/back-header'
import Title from '@/shared/ui/title'

import styles from './styles.module.scss'

const cx = classNames.bind(styles)

export type InformationType = { title: TitleType; data: string | number } | InformationModel[]

const StrategyManagePage = ({ params }: { params: { strategyId: string } }) => {
  const strategyNumber = parseInt(params.strategyId)
  const { data: detailsInfoData } = useGetDetailsInformationData({
    strategyId: strategyNumber,
  })
  const { data: subscribeData } = useGetDetailsInformationData({
    strategyId: strategyNumber,
  })

  const { detailsSideData, detailsInformationData } = detailsInfoData || {}
  const { detailsInformationData: subscribeInfo } = subscribeData || {}
  const hasDetailsSideData = detailsSideData?.map((data) => {
    if (!Array.isArray(data)) return data.data !== undefined
  })

  return (
    <div className={cx('container')}>
      <BackHeader label={'나의 전략으로 돌아가기'} />
      <div className={cx('header')}>
        <Title label={'나의 전략 관리'} />
        <Button size="small" variant="filled" className={cx('edit-button')}>
          정보 수정하기
        </Button>
      </div>
      <div className={cx('strategy-container')}>
        {detailsInformationData && (
          <DetailsInformation
            information={detailsInformationData}
            strategyId={strategyNumber}
            type="my"
          />
        )}
        <AnalysisContainer type="my" strategyId={strategyNumber} />
        <SideContainer hasButton={true}>
          {subscribeInfo && (
            <SubscriberItem subscribers={subscribeInfo?.subscriptionCount} isMyStrategy={true} />
          )}
          {hasDetailsSideData?.[0] &&
            detailsSideData?.map((data, idx) => (
              <div key={`${data}_${idx}`}>
                <DetailsSideItem information={data} strategyId={strategyNumber} />
              </div>
            ))}
        </SideContainer>
      </div>
    </div>
  )
}

export default StrategyManagePage
