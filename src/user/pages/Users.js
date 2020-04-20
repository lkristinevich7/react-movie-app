import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Liudmila Krystsinevich',
      image:
        'data:image/jpeg;base64,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',
      movies: 2
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;