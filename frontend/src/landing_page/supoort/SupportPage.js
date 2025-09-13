import React from 'react'
import Hero from './Hero'
import CreateTicket from './CreateTicket'
import { useEffect } from 'react'

export default function SupportPage() {
   useEffect(()=>{
        window.scrollTo(0,0);
      },[])
  return (
   <>
  <Hero></Hero>
  <CreateTicket></CreateTicket>
   </>
  )
}
