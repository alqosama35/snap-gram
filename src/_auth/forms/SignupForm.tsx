"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Link} from "react-router-dom"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signupValidation } from "@/lib/validation"
import { z } from "zod"
import { Loader } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { signInAccount } from "@/lib/appwrite/api"



 
 const {mutateAsync: createUserAccount, isLoading: isCreatingUser} = useCreateUserAccount();
 const {mutateAsync: signInAccount, isLoading: isSigningIn} = useSignInAccount();

const SignupForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof signupValidation>>({
    resolver: zodResolver(signupValidation),
    defaultValues: {
      name:"",
      username: "",
      email: "",
      password:"", 
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signupValidation>) {
    const newUser = await createUserAccount(values);
    if(!newUser) {
      return toast({title:"Sign up failed. please try again"});
    }

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    })
    if(!session){
      return toast({title:"Sign in faile. Please try again."})
    }
  }
  return ( 
    
      <Form {...form} >
        <div className="sm:w-420 flex-center flex-col">
          <img src="/assets/images/logo.svg" alt="logo"/>
          <h2 className="h2-bold m:h2-bold pt-5 sm:pt-12">Create a new account</h2>
        
        
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className="flex flex-col w-full h-full gap-5">
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            
            
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            
            
            <FormItem>
              <FormLabel>UserName</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            
            
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            
            
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="shad-button_primary" type="submit">
          {isCreatingUser? 
            <div className="flex flex-center gap-2">
              <Loader /> Loading...
            </div>
          : "Sign Up"}
        </Button>
        <p className="text-small-regular text-light-2 text-center">If you already have an account please
           {<Link to={"/signin"} className="text-primary-500"> Login in </Link>}
        </p>
      </form>
      </div>
      
    </Form>
    
    
  )
}

export default SignupForm