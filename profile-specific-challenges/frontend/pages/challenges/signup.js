import { useState } from "react";

function API() {
  return new Promise((res) => {
    setTimeout(
      () =>
        res({
          success: "Your Account has been successfully created!",
          error: "Username is taken",
        }),
      1000
    );
  });
}

export default function SignupForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleOnChange = (e) => {
    setForm({...form, [ e.target.name ]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateFields()
    if (newErrors.length > 0) {
      setErrors(newErrors)
      return
    }
    await submitForm()
  }

  const submitForm = async () => {
    setLoading(true)
    const response = await API(form)
    if (response.error) setErrors([response.error])
    if (response.success) setSuccess(response.success)
    setTimeout(() => {
      setSuccess('')
      setErrors([])
    }, 3000)
    setLoading(false)
  }

  const validateFields = () => {
    const newErrors = []
    if (!form.email.includes('@')) newErrors.push('Emails should have a @')
    if (form.email.includes('@') && !form.email.split('@')[ 1 ].includes('.')) newErrors.push('Emails should have a . in the domain side')
    if (!form.password.match(/\W/)) newErrors.push('Passwords should have at least one special character')
    if (!form.password.match(/\d/)) newErrors.push('Passwords should have at least one number')
    if (form.password.length < 8) newErrors.push('Passwords should be at least 8 characters long')
    return newErrors
  }

  return (
    <main>
      {!!success && <div className='success'>{success}</div>}
      {!!errors.length && errors.map(error => (
        <div key={error} className='error'>{error}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' value={form.email} onChange={handleOnChange}/>
        <label htmlFor='password'>Password</label>
        <input type='text' name='password' value={form.password} onChange={handleOnChange}/>
        <button type='submit' className={loading ? 'disabled' : ''}>Create Account</button>
      </form>
    </main>
  )
}
