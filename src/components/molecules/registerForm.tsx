import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../lib/firebase"
import { useNavigate } from "react-router-dom";



const formSchema = z.object({
  email: z.string().email({
    message:"plese enter a valid email"
  }),
  password: z.string().min(5, {
    message: "At least 5 characters should be present",
  }),
  confirmPassword: z.string(),
});

const RegisterForm = () => { // Capitalized component name
  const navigate=useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

 async function onSubmit(values: z.infer<typeof formSchema>) {
    await createUserWithEmailAndPassword(auth, values.email, values.password)
    console.log('user created')
    navigate('/login')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
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
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl className="bg-white">
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className= "w-full transition text-white ease-in-out delay-150 bg-purple-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
