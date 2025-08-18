import React from 'react'
import { industries } from '@/data/industries'
import { getUserOnboardingStatus } from '@/actions/user'
import OnBoardingForm from './_components/onboarding-form'
import { redirect } from 'next/navigation'


const Onboarding = async () => {
  //Check if user is already onboarded
  const { isOnBoarded } = await getUserOnboardingStatus();

  if (isOnBoarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnBoardingForm industries={ industries } />
    </main>
  )
}

export default Onboarding