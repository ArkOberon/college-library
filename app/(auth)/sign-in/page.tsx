"use client"
import AuthForm from "@/components/AuthForm"
import { signInSchema } from "@/lib/validations"
import { signInWithCredentials } from "@/lib/actions/auth"

const SignIn = () => (
  <AuthForm 
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: ""
    }}
    onSubmit={signInWithCredentials}
  />
)

export default SignIn
