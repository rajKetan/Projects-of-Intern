import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/card'
import LoginForm from '../components/molecules/loginForm'
import { Link } from 'react-router-dom'

const Login = () => {
 
  return (
    <main className="flex flex-col h-screen bg-purple-400 justify-center items-center gap-4 ">
      <div className='bg-pink-100 w-full '>
        <h1 className=' flex  font-black mb-[60px] text-5xl px-[550px] border-black mt-[10px] h-6   font-serif'>Expense-Tracker</h1>
      </div>
      <h1 className=" text-4xl font-bold">Login</h1>
      <p className="font-bold text-4xl">Enter your email to login</p>
      <Card className=" w-1/3">
        <CardHeader>
          <CardTitle className="text-center border-blue-900">
            Hello User
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm></LoginForm>
        </CardContent>
        <CardFooter>
          <Link to={"/register"}><ul>New here? Create an Account</ul></Link>
        </CardFooter>
      </Card>
    </main>
   
  )
}

export default Login