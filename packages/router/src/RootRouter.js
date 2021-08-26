import React from 'react';
import { useUser } from '@/store';
import { PageLogin } from '@/components';

export const RootRouter = () => {
  const { isAuthorized } = useUser();

  return isAuthorized ? <PageLogin /> : <PageLogin />;
};
