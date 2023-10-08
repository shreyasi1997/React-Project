import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoutes = () => {
  const isAuth = window.sessionStorage.getItem('token');
  console.log('receive ', isAuth);

  if (!isAuth) {

    Swal.fire({
      icon: 'error',
      title: 'Need To Login',
      text: 'You need to Login First.',
    });

    return <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet />
     
    </>
  );
};

export default PrivateRoutes;