import type { DetailResponse } from '@/api/basicApi'
import { _useStore as useStore } from '@/_store/_userStore'
import apiBasic from '@/api/basicApi'
import { IImage } from '@/components/common/i-image'
import { IInfoField } from '@/components/common/i-info-field'
import ISeparator from '@/components/common/i-separator'
import { useMutation } from '@tanstack/react-query'
import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
import { Button } from 'antd'

export const Route = createLazyFileRoute('/_app/properties/payment/')({
  component: RouteComponent
})

function RouteComponent() {
  const { t } = useTranslation()
  const router = useRouter()
  const assetObj = useStore(state => state.assetObj) as DetailResponse

  const [tokens, setTokens] = useState(1)

  const plus = () => setTokens(tokens + 1)
  const minus = () => {
    if (tokens > 1) {
      setTokens(tokens - 1)
    }
  }
  const { mutate } = useMutation({
    mutationFn: async () => {
      const res = await apiBasic.purchaseBuy({ id: assetObj.id, number: tokens })
      // router.navigate({ to: '/properties/distribution' })
      return res.data
    }
  })

  return (
    <div className="max-w-7xl p-8 space-y-8">
      <div className="text-center text-6 font-medium">{t('about.payment.payment_title')}</div>

      <div className="flex gap-6 rounded-xl bg-[#202329] p-6">
        <div className="h-60 w-100">
          <IImage src="https://picsum.photos/400/240" className="size-full rounded" />
        </div>
        <div>
          <div className="text-6 font-medium">{assetObj?.name}</div>

          <div className="grid grid-cols-2 mt-4 gap-x-4">
            <IInfoField
              label={t('about.detail.location')}
              value={assetObj?.address}
              labelClass="text-[#898989]"
              className="space-y-2"
            />
            <IInfoField
              label={t('about.detail.property_type')}
              value={assetObj?.property_type}
              labelClass="text-[#898989]"
              className="space-y-2"
            />
            <IInfoField
              label={t('about.payment.token_price')}
              value={assetObj?.price}
              labelClass="text-[#898989]"
              className="space-y-2"
            />
            <IInfoField
              label={t('about.payment.total')}
              value={Number(assetObj?.number) * Number(assetObj?.price)}
              labelClass="text-[#898989]"
              className="space-y-2"
            />
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-[#202329] p-6 space-y-4">
        <div className="text-4.5">{t('about.payment.payment_details')}</div>

        <div className="flex items-center justify-between text-4">
          <div className="text-[#898989] space-y-4">
            <div>{t('about.payment.number')}</div>
            <div>{t('about.payment.subtotal')}</div>
            <div>
              {t('about.payment.platform_fee')}
              {' '}
              (2%)
            </div>
          </div>

          <div className="space-y-4">
            <div className="fyc gap-4">
              <Button className="b-none text-white bg-[#374151]!" onClick={minus}>-</Button>
              <div className="w-12 select-none text-center">{tokens}</div>
              <Button className="b-none text-white bg-[#374151]!" onClick={plus}>+</Button>
            </div>

            <div className="text-right">
              $
              {tokens * 500}
            </div>
            <div className="text-right">
              $
              {tokens * 10}
            </div>
          </div>
        </div>

        <ISeparator className="bg-white" />

        <div className="fbc">
          <div>{t('about.payment.total_amount')}</div>
          <div className="text-primary">$510</div>
        </div>
      </div>

      <div className="rounded-xl bg-[#202329] p-6 space-y-4">
        <div className="text-4.5">{t('about.payment.payment_method')}</div>
        <div className="grid grid-cols-2 gap-6">
          <div className="fcc select-none b b-background rounded-xl b-solid bg-[#212936] py-6 clickable-99">
            <div className="fccc">
              <SvgIcon name="credit-card" className="size-8" />
              <div>
                {t('about.payment.credit_card')}
              </div>
            </div>
          </div>

          <div className="fcc select-none b b-background rounded-xl b-solid bg-[#212936] py-6 clickable-99">
            <div className="fccc">
              <SvgIcon name="cryptocurrency" className="size-8" />
              <div>
                {t('about.payment.cryptocurrency')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-[#202329] p-6 text-4 text-[#898989] space-y-2">
        <p>{t('about.payment.dear_user')}</p>
        <p>
          {t('about.payment.please_verify')}

        </p>
        <p>
          {t('about.payment.please_verify_1')}

          Your account must be fully verified with a valid government-issued ID or passport.
        </p>
      </div>

      <div>
        <div className="text-center text-3.5 text-[#898989]">
          {t('about.payment.expire')}
          14:59
        </div>
        <div className="grid grid-cols-3 mt-2">
          <div>
            <Button
              className="text-white bg-transparent!"
              size="large"
              onClick={() => router.history.back()}
            >
              {t('system.cancel')}
            </Button>
          </div>
          <div className="fcc">
            <Button
              type="primary"
              size="large"
              className="text-black!"
              onClick={() => mutate()}
              loading={false}
            >
              {t('about.payment.confirm_payment')}
            </Button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
