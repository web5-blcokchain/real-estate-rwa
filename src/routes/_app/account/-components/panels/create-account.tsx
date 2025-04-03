import type { RegisterParams } from '@/api/apiMyInfoApi'
import { _useStore as useStore } from '@/_store/_userStore'
import apiMyInfo from '@/api/apiMyInfoApi'
import IFormItem from '@/components/common/i-form-item'
import IInput from '@/components/common/i-input'
import ISeparator from '@/components/common/i-separator'
import { usePrivy } from '@privy-io/react-auth'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useSteps } from '../steps-provider'

export default function CreateAccountPanel() {
  const { t } = useTranslation()
  const { next } = useSteps()
  const navigate = useNavigate()
  const setRegisterData = useStore(state => state.setRegisterData)

  const { authenticated, user, login } = usePrivy()

  const { mutate: createMutate } = useMutation({
    mutationFn: async (data: RegisterParams) => {
      const res = await apiMyInfo.register(data)
      navigate({ to: '/home' })
      return res?.data
    }
  })

  useEffect(() => {
    if (authenticated && user) {
      const data = {
        mobile: user?.phone ? Number(user.phone) : undefined,
        email: user?.email?.address,
        wallet_address: user?.wallet?.address,
        business_registration_document: '',
        shareholder_structure_url: '',
        legal_representative_documents_url: '',
        financial_documents_url: '',
        token: ''

      }
      createMutate(data)
    }
  }, [authenticated, user, createMutate])

  return (
    <div className="fccc gap-2">
      <div className="text-8 font-medium">{t('create.step1')}</div>
      <div className="text-4 text-[#898989]">{t('create.baseInfo.subTitle')}</div>

      <div className="max-w-xl w-full space-y-6">
        <IFormItem label={t('create.baseInfo.email')}>
          <IInput placeholder={t('create.baseInfo.emailPlaceholder')} className="w-full" onChange={e => setRegisterData({ email: e.target.value })} />
        </IFormItem>

        <IFormItem label={t('create.baseInfo.phone')} description={t('create.baseInfo.phoneDescription')}>
          <IInput placeholder={t('create.baseInfo.phonePlaceholder')} className="w-full" onChange={e => setRegisterData({ mobile: e.target.value })} />
        </IFormItem>

        <IFormItem label={t('create.baseInfo.password')} description={t('create.baseInfo.passwordDescription')}>
          <IInput placeholder={t('create.baseInfo.passwordPlaceholder')} className="w-full" onChange={e => setRegisterData({ password: e.target.value })} />
        </IFormItem>

        <button type="button" className="h-12.5 w-full rounded bg-primary-2 text-background clickable-99" onClick={next}>{t('create.baseInfo.account')}</button>

        <ISeparator text="or" />

        <div className="grid grid-cols-2 gap-4">
          <button type="button" className="fyc justify-center gap-3 b b-border rounded py-3 clickable-99" onClick={login}>
            <span className="i-ion-logo-google size-5"></span>
            <span>{t('create.baseInfo.google')}</span>
          </button>

          <button type="button" className="fyc justify-center gap-3 b b-border rounded py-3 clickable-99">
            <span className="i-ion-logo-apple size-5"></span>
            <span>{t('create.baseInfo.apple')}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
