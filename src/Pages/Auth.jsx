import React, { useState } from 'react';
import { loginAPI, registerAPI } from '../Services/allAPI';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

const Auth = ({closeModal}) => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState('Login');

  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        if (inputData.username && inputData.email && inputData.password) {
          const result = await registerAPI(inputData);
          if (result.status === 200) {
            toast.success('User Registered successfully');
            setInputData({ username: '', email: '', password: '' });
          } else if (result.response && result.response.status === 406) {
            toast.warning(result.response.data || 'Registration failed.');
          }
        } else {
          toast.warning('Please fill out all fields.');
        }
      } else if (currentState === 'Login') {
        if (inputData.email && inputData.password) {
          const result = await loginAPI(inputData);
          if (result.status === 200) {
            sessionStorage.setItem('user', JSON.stringify(result.data.user));
            sessionStorage.setItem('token', result.data.token);
            toast.success('Login successful');
            setInputData({ username: '', email: '', password: '' });
            setTimeout(() => closeModal(), 2000);
            
          } else {
            toast.warning('Invalid login credentials.');
          }
        } else {
          toast.warning('Please enter your email and password.');
        }
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full max-w-md mx-auto mt-14 p-8 bg-white "
    >
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">{currentState}</h1>
        <hr className="h-[2px] w-10 bg-gray-800" />
      </div>

      {currentState === 'Sign Up' && (
        <input
          type="text"
          value={inputData.username}
          onChange={(e) => setInputData({ ...inputData, username: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Username"
        />
      )}
      <input
        type="email"
        value={inputData.email}
        onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none mt-3"
        placeholder="Email"
      />
      <input
        type="password"
        value={inputData.password}
        onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none mt-3"
        placeholder="Password"
      />
      <div className="w-full flex justify-between text-sm mt-3 text-gray-600">
        <p className="cursor-pointer hover:text-blue-500">Forgot Your Password?</p>
        {currentState === 'Login' ? (
          <p
            onClick={() => setCurrentState('Sign Up')}
            className="cursor-pointer hover:text-blue-500"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('Login')}
            className="cursor-pointer hover:text-blue-500"
          >
            Login
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white font-medium py-3 rounded-lg mt-6 hover:bg-gray-800 transition duration-200"
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
      <Toaster position="top-right" />
    </form>
  );
};

export default Auth;
