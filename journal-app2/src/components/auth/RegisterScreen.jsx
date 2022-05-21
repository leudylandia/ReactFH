import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: 'Juan',
    email: 'saludo@outlook.es',
    password: '123456',
    password2: '123456'
  });

  const {email, name, password, password2} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if(isFormValid())
        dispatch(startRegisterWithEmailPasswordName(email, password, name));
  }

  const isFormValid = () => {
    if(name.trim().length === 0){
      //console.log('Name required');
      dispatch(setError('Name required'));
      return false;
    }
    else if (!validator.isEmail(email)) {
      //console.log('email is not valid');
      dispatch(setError('email is not valid'));
      Swal.fire('Error', 'email is not valid', 'error');
      return false;
    }
    else if (password !== password2 || password.length < 5) {
      //console.log('password not valid, is empty, less than 6 characters or not match');
      dispatch(setError('password not valid, is empty, less than 6 characters or not match'));
      return false;
    }
    dispatch(removeError());

    return true;
  }

  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleRegister}>
        
        {
          msgError && (
            <div className='auth__alert-error'>
              {msgError}
            </div>)
        }

        <input className='auth__input' value={name} onChange={handleInputChange} type='text' placeholder='Name' name='name' autoComplete='off'/>
        <input className='auth__input' value={email} onChange={handleInputChange} type='text' placeholder='Email' name='email' autoComplete='off'/>
        <input className='auth__input' value={password} onChange={handleInputChange} type='password' placeholder='Password' name='password'/>
        <input className='auth__input' value={password2} onChange={handleInputChange} type='password' placeholder='Confirm password' name='password2'/>
        
        <button className='btn btn-primary btn-block mb-5' type='submit'>Register</button>    

        
        <Link className='link' to='/auth/login'>Have account?</Link>
      </form>
    </>
  )
}
