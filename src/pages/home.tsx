import React, { useEffect } from 'react'
import { Button } from '../components/ui/button'
import { DataTable } from '../components/ui/transactionsDataTable'
import { Input } from '../components/ui/input'
import {signOut} from 'firebase/auth'
import { collection,getDocs, query, where } from 'firebase/firestore'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import TransactionForm from '../components/molecules/transactionForm'
import {auth} from '../lib/firebase'
import { useNavigate } from 'react-router-dom'
import { db } from '../lib/firebase'
import { useState } from 'react'
import { columns } from '../components/ui/transactionColumns'
import { useStore } from '../store'
import  image  from '../components/images/expenses.jpg'



const Home = () => {
const navigate = useNavigate()
const {loggedIn , logOut} = useStore()
const[transactionList,setTransactionList] =useState([{

  amount : "",
 description : "",
   title : "",
  transactionType : "",
  uid: ""
  
}])
async function signout(){
logOut()
     signOut(auth).then(
      ()=> navigate('/login')
     )
  }

  
useEffect(()=>{

  if(loggedIn){
    navigate('/home')
  }
  const getData =async()=>{
    const querySnapshot = await getDocs(query(collection(db,"transactions"),where("uid", "==",auth.currentUser?.uid)));
    let list:any =[]
    querySnapshot.forEach((doc) => {
    
      list.push(doc.data())
     
    }
    )
    setTransactionList(list)
    }
    getData()
    console.log(transactionList)
},[])

  return (
   
    <>
     <div className="translate-x(-40px) bg-black  scale(5)overflow-x-40 relative h-screen bg-cover " style={{ backgroundImage: 'url(src/assets/image/expenses.jpg)' }}>
     
    <h1 className='bg-purple-400 text-center tracking-wide uppercase text-5xl font-serif border-black p-4'>Expense Tracker</h1>
    <Button className= "inline-flex justify-center  bg-black mt-5 hover:bg-slate-950 text-white  font-bold py-2 px-4 rounded mx-64" onClick={signout}>Sign Out</Button>

    <Dialog>
  <DialogTrigger><Button className=' inline-flex   bg-slate-900 text-white  hover:bg-black font-bold py-4 px-3 mb-4 rounded mx-80'>Add Expense</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader className='bg-white'>
      <DialogTitle className='p-4'> Add Transaction</DialogTitle>
      <DialogDescription className='p-3'>
        Manage your finances, keep updating your Transaction
      </DialogDescription>
    </DialogHeader>
    <TransactionForm></TransactionForm>
  </DialogContent>
</Dialog>
<div className='min-w-full    gap-4 p-4 bg-slate-500 rounded-2xl relative h-screen 
 border-b-gray-700 text-pink-100'>
  <DataTable columns={columns} data={transactionList} ></DataTable>
</div>

</div>
    
    </>
    
  )
}

export default Home