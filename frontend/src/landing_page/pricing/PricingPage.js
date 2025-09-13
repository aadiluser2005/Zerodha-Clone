import React from 'react'
import Brokerage from './Brokerage'
import Hero from './Hero'
import OpenAccount from '../OpenAccount'
import { useEffect } from 'react';

export default function PricingPage() {
  useEffect(()=>{
      window.scrollTo(0,0);
    },[])
  return (
  <>
   <Hero></Hero>
    <OpenAccount></OpenAccount>
   <Brokerage></Brokerage>
  
  </>
  )
}
