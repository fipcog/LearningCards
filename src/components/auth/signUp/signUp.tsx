import { useForm } from 'react-hook-form'
import { RegisterFormValues, registerSchema } from '@/components/auth/helpers/loginValidationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import s from '@/components/auth/signIn/signIn.module.scss'
import { Header } from '@/components/ui/header'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { clsx } from 'clsx'
import { ControlledInput } from '@/components/ui/input/ControlledInput'

export const SignUp = () => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) })

  const onSubmit = (values: RegisterFormValues) => {
    console.log(values)
  }

  return (
    <div className={s.container}>
      <Header isLoggedIn={false} />
      <Card as={'div'} className={s.cardContainer}>
        <Typography as={'h1'} variant={'h1'} className={s.title}>
          Sign Up
        </Typography>
        <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className={clsx(s.inputContainer, s.signUpInputs)}>
            <ControlledInput
              control={control}
              name={'email'}
              error={errors.email?.message}
              label={'Email'}
              className={s.input}
            />
            <ControlledInput
              control={control}
              name={'password'}
              error={errors.password?.message}
              label={'Password'}
              variant={'password'}
              className={s.input}
            />
            <ControlledInput
              control={control}
              name={'confirmPassword'}
              error={errors.confirmPassword?.message}
              label={'Confirm Password'}
              variant={'password'}
              className={s.input}
            />
          </div>
          <Button fullWidth type={'submit'}>
            Sign Up
          </Button>
        </form>
        <Typography variant={'body2'} className={s.haveAnAccount}>
          Already have an account?
        </Typography>
        <Typography as={'a'} className={s.signIn} href={'#'}>
          Sign In
        </Typography>
      </Card>
    </div>
  )
}
