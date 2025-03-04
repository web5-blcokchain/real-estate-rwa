import { CreateAccountStep, useSteps } from '../steps-provider'

import ConnectWalletPanel from './connect-wallet'
import CreateAccountPanel from './create-account'
import VerificationPanel from './verification'

export function AccountPanel() {
  const { currentStep } = useSteps()

  return (
    <div className="py-8">
      { currentStep === CreateAccountStep.BaseInfo && (<CreateAccountPanel />) }
      { currentStep === CreateAccountStep.Wallet && (<ConnectWalletPanel />) }
      { currentStep === CreateAccountStep.Verification && (<VerificationPanel />) }
    </div>
  )
}
