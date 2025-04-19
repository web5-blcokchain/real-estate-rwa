import type { FC } from 'react'
import { getTransactionDetail } from '@/api/transaction'
import { ChatButton } from '@/components/common/chat-button'
import { IInfoField } from '@/components/common/i-info-field'
import { useQuery } from '@tanstack/react-query'
import { createLazyFileRoute, useMatch } from '@tanstack/react-router'
import { Button, Progress } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Web3 from 'web3'

export const Route = createLazyFileRoute('/_app/transaction/$id')({
  component: RouteComponent
})

function RouteComponent() {
  const { t } = useTranslation()
  const { params } = useMatch({
    from: '/_app/transaction/$id'
  })

  const id = Number.parseInt(params.id)
  const [status, setStatus] = useState<'pending' | 'success' | 'failed'>('pending')
  const [progress, setProgress] = useState(10)

  const { data, isLoading } = useQuery({
    queryKey: ['transaction', id],
    queryFn: async () => {
      const res = await getTransactionDetail({ id })
      return res.data
    }
  })

  // 使用交易确认逻辑
  useEffect(() => {
    if (!data || isLoading)
      return

    const txHash = _get(data, 'transaction.hash')
    if (!txHash)
      return

    const checkTransaction = async () => {
      try {
        if (!window.ethereum) {
          console.error('No Ethereum provider found')
          return
        }

        const web3 = new Web3(window.ethereum)
        const receipt = await web3.eth.getTransactionReceipt(txHash)

        if (receipt) {
          console.log('Transaction receipt:', receipt)

          if (receipt.status) {
            console.log('Payment successful')
            toast.success(t('payment.success.payment_success'))
            setStatus('success')
            setProgress(100)
          }
          else {
            console.log('Transaction failed')
            toast.error(t('payment.errors.tx_failed'))
            setStatus('failed')
          }
        }
        else {
          console.log('Transaction not yet confirmed.')
          toast.info(t('payment.info.tx_pending'))
          // 增加进度但不到100%，表示处理中
          setProgress(prev => Math.min(prev + 5, 90))
        }
      }
      catch (error) {
        console.error('Error checking transaction:', error)
      }
    }

    // 立即检查一次
    checkTransaction()

    // 设置定期检查
    const interval = setInterval(checkTransaction, 3000)

    return () => clearInterval(interval)
  }, [data, isLoading, t])

  // 根据状态选择要显示的组件
  const renderStatusComponent = () => {
    if (status === 'success') {
      return <Result />
    }
    else {
      return <Request />
    }
  }

  return (
    <div className="mx-a max-w-3xl p-8 space-y-8">
      <div className="text-center text-7 font-medium">Token Distribution</div>

      <Waiting
        for={!isLoading}
        className="h-32 fcc"
        iconClass="size-12"
      >
        <div className="rounded-xl bg-[#212328] p-6 space-y-4">
          {/* 根据交易状态显示不同的组件 */}
          {renderStatusComponent()}

          <div className="rounded-xl bg-[#252932] p-4 space-y-2">
            <div className="fbc text-3.5">
              <div>Smart Contract Address</div>
              <div className="fyc gap-2">
                <div>{_get(data, 'token.smart_contract_address')}</div>
                <div
                  className="i-mingcute-copy-2-fill bg-[#b5b5b5] clickable"
                  onClick={
                    () => copy(
                      _get(data, 'token.smart_contract_address')
                    )
                  }
                >
                </div>
              </div>
            </div>

            <div className="fbc text-3.5">
              <div>Token Contract Address</div>
              <div className="fyc gap-2">
                <div>{_get(data, 'token.token_contract_address')}</div>
                <div
                  className="i-mingcute-copy-2-fill bg-[#b5b5b5] clickable"
                  onClick={
                    () => copy(
                      _get(data, 'token.token_contract_address')
                    )
                  }
                >
                </div>
              </div>
            </div>

            <div className="fbc text-3.5">
              <div>Estimated Execution Time</div>
              <div>{_get(data, 'token.estimated_execution_time')}</div>
            </div>
          </div>

          <div className="rounded-xl bg-[#252932] p-6 space-y-4">
            <div className="text-4 font-medium">Property Token Distribution</div>

            <ul
              className={cn(
                'list-disc list-inside text-3.5 space-y-2',
                '[&>li]:(space-x-1)'
              )}
            >
              <li>{_get(data, 'property.name')}</li>
              <li>
                <span>Property Location:</span>
                <span>{_get(data, 'property.location')}</span>
              </li>
              <li>
                <span>Registration Number:</span>
                <span>{_get(data, 'property.registration_number')}</span>
              </li>
              <li>
                <span>Annual Yield:</span>
                <span>{_get(data, 'property.annual_yield')}</span>
              </li>
              <li>{_get(data, 'property.audit')}</li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl bg-[#212328] p-6 space-y-4">
          <div className="fbc">
            <div className="font-medium">Transaction Status</div>
            <div className="text-[#898989]">Estimated token arrival time: 25 seconds</div>
          </div>

          <Progress
            className="w-full"
            strokeColor="var(--primary)"
            trailColor="#898989"
            percent={progress}
            showInfo={false}
            status={status === 'failed' ? 'exception' : undefined}
          />

          <div className="fbc text-3.5">
            <div>Transaction Hash</div>
            <div className="fyc gap-2">
              <div>{_get(data, 'transaction.hash')}</div>
              <div
                className="i-mingcute-copy-2-fill bg-[#b5b5b5] clickable"
                onClick={
                  () => copy(_get(data, 'transaction.hash'))
                }
              >
              </div>
            </div>
          </div>

          <IInfoField
            horizontal
            label="Smart Contract Status"
            value={status === 'pending' ? 'Processing' : (status === 'success' ? 'Success' : 'Failed')}
            labelClass="text-3.5"
            valueClass={`text-3.5 ${status === 'success' ? 'text-green!' : (status === 'failed' ? 'text-red!' : '')}`}
          />

          <IInfoField
            horizontal
            label="Block Confirmation"
            value={status === 'success' ? 'Confirmed' : 'Pending'}
            labelClass="text-3.5"
            valueClass="text-3.5"
          />
        </div>

        <div className="pt-4 text-center">
          <Button
            type="primary"
            size="large"
            className="text-black!"
            disabled={status === 'pending'}
          >
            {status === 'success' ? 'View in Explorer' : 'Confirm in Wallet'}
          </Button>
        </div>

        <ChatButton />
      </Waiting>
    </div>
  )
}

const Request: FC = () => {
  return (
    <>
      <div className="fbc">
        <div className="fyc gap-4">
          <SvgIcon name="token" className="size-6" />
          <div>
            <div className="text-3.5 text-[#b5b5b5]">Token Type</div>
            <div className="text-4 font-medium">RWA Token</div>
          </div>
        </div>
        <div>
          <div className="text-right text-3.5">Receiving Amount</div>
          <div className="text-right text-4 font-medium">1000 RWA</div>
        </div>
      </div>

      <div className="space-y-4">
        <IInfoField
          horizontal
          label="Transaction Status"
          value="Payment Successful"
          labelClass="text-3.5"
          valueClass="text-green! text-3.5"
        />

        <IInfoField
          horizontal
          label="Payment Amount"
          value="0.2 ETH"
          labelClass="text-3.5"
          valueClass="text-3.5"
        />
      </div>
    </>
  )
}

const Result: FC = () => {
  return (
    <>
      <div className="fccc gap-4">
        <div className="i-ep-success-filled size-15 bg-green"></div>
        <div className="text-6 font-medium">Token Distribution Complete</div>
        <div className="text-4 text-[#898989]">Tokens have been successfully transferred to your wallet</div>
      </div>

      <div className="rounded-xl bg-[#252932] p-4">
        <div className="text-3.5 text-[#b5b5b5]">Real Estate Token</div>
        <div className="text-4 font-medium">JPRE-0023</div>
      </div>
    </>
  )
}
