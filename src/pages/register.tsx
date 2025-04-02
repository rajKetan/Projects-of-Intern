import RegisterForm from '../components/molecules/registerForm'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'

const Register = () => {
  return (
    <main className="flex flex-col h-screen bg-purple-400 justify-center items-center gap-4">
      <div className='bg-pink-100 w-full '>
        <h1 className=' flex  font-black mb-[60px] text-5xl px-[550px] border-black mt-[10px] h-6   font-serif'>Expense-Tracker</h1>
      </div>
      <h1 className=" text-4xl font-bold">Register</h1>
      <p className="font-bold text-4xl">Enter your email to register</p>
      <Card className=" w-1/3">
        <CardHeader>
          <CardTitle className="text-center">
            Hello User
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm></RegisterForm>
        </CardContent>
      </Card>
    </main>
  )
}

export default Register