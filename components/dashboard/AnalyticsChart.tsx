'use client'

import React, { useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
  } from 'recharts';
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import analyticsItems from '@/data/analytics';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup
  } from "@/components/ui/select"
  
  

const AnalyticsChart = () => {
    const availableFilters = [
        {
          value: "uv",
          label: "Unique Visitors",
        },
        {
          value: "pv",
          label: "Page Views",
        },
        {
          value: "amt",
          label: "Amount",
        }
      ]
      const [selection, setSelection] = useState("pv");
  return (
  <>
 <Card className='mb-4'>
  <CardHeader>
    <CardTitle>Analytics For This Year</CardTitle>
    <CardDescription>Viewers Per Month</CardDescription>
    <div className=' hidden md:block'>
    <Select onValueChange={setSelection} defaultValue="pv">
          <SelectTrigger className="w-96 h-8">
            <SelectValue placeholder="Select Account" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
             {availableFilters.map((filter) => (
                <SelectItem key={filter.value} value={filter.value}>
                  {filter.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
    </div>
   
  </CardHeader>
  <CardContent>
  <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <LineChart width={1100} height={300} data={analyticsItems}>
                <Line type='monotone' dataKey={selection} stroke='#8884d8' />
                <CartesianGrid stroke='#ccc' />
                <XAxis dataKey='name' />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
  </CardContent>
 
</Card>

  </>
  )
}

export default AnalyticsChart
