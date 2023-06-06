import { Button } from 'antd';
import React from 'react';
import { usePub } from '../hooks/usePubSub';

const Home = () => {
  const publish = usePub();
  const handleOpenModal = () => publish('openLoginModal');

  return (
    <div>
      This is home page
      <Button onClick={handleOpenModal}>Open login modal from homepage</Button>
    </div>
  )
};

export default Home;