import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const AuthTaps = () => {
  return (
    <>
    <Tabs defaultValue="login" className="w-[400px]">
  <TabsList className="w-[100%]">
    <TabsTrigger className="w-[100%]" value="login">Login</TabsTrigger>
    <TabsTrigger className="w-[100%]" value="register">Create Account</TabsTrigger>
  </TabsList>
  <TabsContent value="login"><LoginForm/></TabsContent>
  <TabsContent value="register"><RegisterForm/></TabsContent>
</Tabs>

    </>
  )
}

export default AuthTaps
