import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../src/firebase/config';
import { Spin } from 'antd';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
   const history = useNavigate();

   const [user, setUser] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const unSubscibed = auth.onAuthStateChanged((user) => {
         console.log({ user });
         if (user) {
            const { displayName, email, uid, photoURL } = user;

            setUser({ displayName, email, uid, photoURL });
            history('/');
            setIsLoading(false);
         } else {
            history('/login');
         }
      });

      //   clear function
      return () => {
         unSubscibed();
      };
   }, [history]);

   return <AuthContext.Provider value={user}>{isLoading ? <Spin /> : children}</AuthContext.Provider>;
};

export default AuthProvider;
