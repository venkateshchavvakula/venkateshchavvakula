import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Validator from 'validatorjs'

import { Input } from '../../Common/Input/Input'
import CustomButton from '../../Common/Button'
import CustomCheckbox from '../../Common/Input/Checkbox'

import LightHide from '../../../assets/icons/LightHide.svg'
import LightShow from '../../../assets/icons/LightShow.svg'

import { formReset, login } from '../../../features/auth/authSlice'
import { encryptData, decryptData } from '../../../utils/encryption'
import { rememberMeToken } from '../../../utils/auth'
import CircularProgress from '@mui/material/CircularProgress'

const fields = {
  email: '',
  password: '',
}

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, access_token } = useSelector((state: any) => state.auth)
  const [params, setParams] = useState(fields)


  const [formErrors, setFormErrors] = useState(fields)
  const [eyeOpen, setEyeOpen] = useState(false)
  const [remember_me, setRememberMe] = useState(false)
  const remember_me_token = rememberMeToken()

  useEffect(() => {
    if (remember_me_token) {
      const decrypt = decryptData(remember_me_token)
      if (decrypt) {
        const [email, password] = decrypt.split('__')
        if (email && password) {
          setParams({ email, password })
          setRememberMe(true)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (Object.keys(user).length) {
      navigate('/home')
    }
  }, [user])

  useEffect(() => {
    if (access_token) {
      navigate(`/create-password/${access_token}`)
    }
  }, [access_token])  

  const handleChange = (e: any) => {
    if (e.currentTarget.value.includes(' ')) {
      e.currentTarget.value = e.currentTarget.value.replace(/\s/g, '')
    }
    formReset()
    setFormErrors(fields)
    setParams({ ...params, [e.target.name]: e.target.value })
  }
  const handleCheck = (e: any) => {
    const { checked } = e.target
    setRememberMe(checked)
  }
  const submit = async (e: any) => {
    e.preventDefault()

    const validation = new Validator(
      params,
      {
        email: 'email|required',
        password: 'required|min:8|max:14',
      },
      {
        required: '*required',
      },
    )

    if (validation.fails()) {
      const fieldErrors: any = {}
      Object.keys(validation.errors.errors).forEach((key) => {
        fieldErrors[key] = validation.errors.errors[key][0]
      })
      setFormErrors(fieldErrors)
      return false
    }

    if (remember_me) {
      const remember_me_token = encryptData(`${params.email}__${params.password}`)
      localStorage.setItem('remember_me_token', remember_me_token)
    } else {
      localStorage.removeItem('remember_me_token')
    }

    dispatch(login(params))

    return true
  }

  return (
    <div  className='bg-gray-100 h-screen'>
      <div className='w-full m-auto max-w-2xl pt-8'>
        <div className=' flex flex-col justify-center items-center p-6  sm:p-6 md:p-12 rounded-lg  bg-white shadow '>
          <p className='text-Sailboat  text-xl  font-nunitoBold flex items-center gap-2 mb-4'>
            Welcome to 
            <span>
              Venkatesh Chavvakula
            </span>
          </p>
          <p className='text-center md:text-left text-xs text-Sailboat mb-8'>
            Please sign-in to your account and start the adventure!
          </p>
          <form className='flex flex-col space-y-4 w-full relative ' onSubmit={submit}>
            <Input
              rows={1}
              width='w-full'
              disabled={false}
              readOnly={false}
              label='Email Id'
              name='email'
              value={params.email}
              handleChange={handleChange}
              type='text'
              error={formErrors?.email?.length > 0}
              helperText={
                formErrors?.email?.includes('required')
                  ? formErrors?.email
                  : formErrors?.email?.includes('format')
                  ? formErrors?.email
                  : ''
              }
            />{' '}
            <div className=' relative'>
              <Input
                rows={1}
                width='w-full'
                disabled={false}
                readOnly={false}
                label='Password'
                name='password'
                value={params.password}
                handleChange={handleChange}
                type={eyeOpen ? 'text' : 'password'}
                error={formErrors?.password?.length > 0}
                helperText={formErrors?.password?.includes('required') ? formErrors?.password : ''}
              />
              {eyeOpen ? (
                <img
                  className='absolute right-2 top-4 cursor-pointer'
                  onClick={() => setEyeOpen(false)}
                  src={LightShow}
                  alt='eye-closed'
                />
              ) : (
                <img
                  className='absolute right-2 top-4 cursor-pointer'
                  onClick={() => setEyeOpen(true)}
                  src={LightHide}
                  alt='eye-closed'
                />
              )}
            </div>
            {!formErrors?.password?.includes('required') &&
              !formErrors?.email?.includes('required') && (
                <p className=' pl-4  text-xs text-red-600'>{formErrors?.password}</p>
              )}
            <div className=' flex justify-between items-center '>
              <CustomCheckbox
                handleCheck={handleCheck}
                ischecked={remember_me}
                color='text-Comet'
                name='remember'
                Label='Remember me'
              />
              <div>
                <Link className='text-yellow text-xs sm:text-sm' to='/forgot-password'>
                  Forgot Password ?
                </Link>
              </div>
            </div>
            <br />
            <CustomButton variant='contained' type='submit' disabled={isLoading}>
              <span className='flex items-center justify-center gap-2'>
                {isLoading ? <CircularProgress size='2vh' sx={{ color: 'black' }} /> : ''}
                Login
              </span>
            </CustomButton>
          </form>
        </div>
      </div>
      </div>
  )
}

export default Login
