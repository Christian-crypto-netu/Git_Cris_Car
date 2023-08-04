import { useForm } from 'react-hook-form'

function RegisterPage() {

  const { register, handleSubmit } = useForm()

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      <form onSubmit={handleSubmit( async(values) => {
        console.log(values)
      })}>
        <input type="text" {...register("username", {required:true})} placeholder='Username' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>
        <input type="email" {...register("email", {required:true})} placeholder='Email' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>
        <input type="password" {...register("password", {required:true})} placeholder='Password' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>

        <button type="submit" className="rounded-full">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage