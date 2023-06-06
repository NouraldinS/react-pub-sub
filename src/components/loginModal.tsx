import { Input, Modal } from 'antd';
import React, { useState } from 'react';
import { useSub } from '../hooks/usePubSub';

const emptyForm = { username: '', password: '' }

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(emptyForm)

  const handleChange = ((event) => {
    const { target: { value, name } } = event;
    setForm(state => ({...state, [name]: value}))
  }) as React.ChangeEventHandler<HTMLInputElement>

  const openModal = (data?: {username: string, password: string}) => {
    setIsOpen(true);
    if (data) {
      setForm(data);
    } else {
      setForm(emptyForm);
    }
  }
  const closeModal = () => {
    setIsOpen(false); 
    setForm(emptyForm)
  }

  useSub('openLoginModal', openModal);

  return (
    <Modal open={isOpen} closable onCancel={closeModal}>
      <Input name='username' placeholder='Username' value={form.username} onChange={handleChange} />
      <Input name='password' placeholder='Password' type='password' value={form.password} onChange={handleChange} />
    </Modal>
  )
}

export default LoginModal;