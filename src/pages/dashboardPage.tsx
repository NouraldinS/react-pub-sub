import { Button } from 'antd';
import React from 'react';
import { usePub } from '../hooks/usePubSub';

const Dashboard = () => {
  const publish = usePub();
  const handleOpenModal = () => publish('openLoginModal');

  return (
    <div>
      This is dashboard page
      <Button onClick={handleOpenModal}>Open login modal from dashboard</Button>
    </div>
  )
};

export default Dashboard;