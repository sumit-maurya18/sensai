import React from 'react'
import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/dist/server/api-utils';

const IndustryInsightspage = async () => {

    const { isOnboarded } = await getUserOnboardingStatus();
    
      if (!isOnBoarded) {
        redirect("/onBoarding");
    }
    
    return (
        <div>IndustryInsightspage</div>
    )
}

export default IndustryInsightspage