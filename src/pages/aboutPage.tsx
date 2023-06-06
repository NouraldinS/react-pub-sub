import { Button } from 'antd';
import React from 'react';
import { usePub } from '../hooks/usePubSub';

const About = () => {
  const publish = usePub();
  const handleOpenModal = () => publish('openLoginModal');
  const handleOpenModalWithData = () => publish(
    'openLoginModal', 
    { username: 'nouraldin', password: 'sliding_corvids' }
  );

  return (
    <div>
      This is about page
      <Button onClick={handleOpenModal}>Open login modal from about page</Button>
      <Button onClick={handleOpenModalWithData}>Open login modal with data</Button>
    </div>
  )
};

export default About;