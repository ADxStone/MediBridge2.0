
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';

const AccountPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </div>
  );
};

export default AccountPage;