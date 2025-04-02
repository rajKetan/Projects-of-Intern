import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.tsx";

import {useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../lib/firebase.ts";
import { DialogClose } from "../ui/dialog.tsx";



const numberRegex = new RegExp("^\d+$")

const formSchema = z.object({
  title:z.string().min(2,{
    message: "minimum 2 characters required"
  }),
  description:z.string().optional(),
  amount:z.string(),
  transactionType:z.string(),
});

const TransactionForm = () => { // Capitalized component name
  const navigate=useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title:"",
      description:"",
      amount:"",
      transactionType:"",
    },
  });
  
  

 async function onSubmit(values: z.infer<typeof formSchema>) {
    
    const docRef = await addDoc(collection(db , "transactions"), {
        uid: auth.currentUser?.uid,
        title:values.title,
        description:values.description,
        amount: values.amount,
        transactionType:values.transactionType
      
      });
      navigate('/')
  }

  return (
    <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-center bg-white p-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl className="text-center">
                <Input placeholder="enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input type="text" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* <FormField
          control={form.control}
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="transactionType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel >Transaction Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Income" />
                    </FormControl>
                    <FormLabel className=" font-bold px-[20px]">
                      Income
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Expense" />
                    </FormControl >
                    <FormLabel className="font-bold px-[20px]">
                      Expense
                    </FormLabel>
                  </FormItem>
                 
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose>
        <Button className= " bg-blue-500 hover:bg-black text-white font-bold mb-[20px] py-2 px-4 rounded-full" type="submit" >Submit</Button>
        
        </DialogClose>
 
      </form>
    </Form>
  );
};

export default TransactionForm;
