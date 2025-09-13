import React from 'react'
import Hero from './Hero';
import Team from './Team';
import { useEffect } from 'react';
export default function AboutPage() {
    useEffect(()=>{
      window.scrollTo(0,0);
    },[])
  return (
           <>
            <Hero></Hero>
            <Team></Team>
           </>
  );
}
