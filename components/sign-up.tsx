import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface SignUpProps {
    classname?: string
}

const SignUp = ( { classname } : SignUpProps) => {
  return (
    <div className={`${classname}`}>
        <div className='py-5'>
            <h1 className='text-3xl my-5 font-semibold text-slate-950 dark:text-white'>Tài Khoản</h1>
          </div>
          <div className='w-[500px] lg:w-[600px] mx-auto text-center'>
            <h1 className='text-3xl my-5 font-semibold text-slate-950 dark:text-white'>ĐĂNG KÝ</h1>
            <div className='text-left'>
              <Label htmlFor='email' className='text-xl font-semibold text-slate-950 dark:text-white'>Địa chỉ email <span className='text-red-600'>*</span></Label>
              <Input className='mt-2'/>
              <h1 className='text-xl font-semibold text-slate-950 dark:text-white my-6'>A link to set a new password will be sent to your email address.</h1>
              <div className='p-5 space-y-8 pb-12 border border-slate-950 dark:border-slate-800 shadow-md'>
                <p className='text-xl font-semibold text-slate-950 dark:text-white text-balance'>For security, use of Google's reCAPTCHA service is required which is subject to the Google <span>Privacy Policy</span> and <span>Terms of Use</span>.</p>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='confirm-policy'/>
                  <Label htmlFor='confirm-policy'>I agree to these terms (required).</Label>
                </div>
              </div>
              <Button className='w-full rounded-full bg-black dark:bg-slate-950 mt-4 text-white dark:text-white'>ĐĂNG KÝ</Button>
            </div>
          </div>
    </div>
  )
}

export default SignUp