import React, { JSX } from 'react'
import {
    Card,
    CardContent,
  } from "@/components/ui/card"

  interface DashboardCardProps {
    card:{
        title:string,
        icon: JSX.Element,
        num:number,
    }

    }
  
const DashboardCard = ({card}:DashboardCardProps) => {
   
  return (
  <>
  <Card className=" min-w-[250px]">
  <CardContent className='bg-slate-100 dark:bg-slate-800 p-4'>
    <h3 className='text-3xl text-slate-500 dark:text-slate-200 font-bold text-center'>{card.title}</h3>
    <div className='flex items-center gap-2 mt-4 justify-center text-slate-500'>
    {card.icon} 
    <h3 className='text-3xl font-semibold'>{card.num}</h3>
    </div>
  
  </CardContent>
 
</Card>

  
  </>
  )
}

export default DashboardCard
