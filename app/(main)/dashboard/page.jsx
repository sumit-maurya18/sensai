import React from 'react'
import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';

const IndustryInsightspage = async () => {

    const { isOnBoarded } = await getUserOnboardingStatus();
    
      if (!isOnBoarded) {
        redirect("/onBoarding");
    }
    
    return (
        <div>IndustryInsightspage</div>
    )
}

export default IndustryInsightspage