import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";
import {Suspense, useEffect, useState} from "react";
import { Modal } from "shared/ui/Modal/Modal";
import {useDispatch} from "react-redux";
import {userActions} from "entities/User";

const App = () => {
  const {theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch]);

  return (
     <div className={classNames('app', {}, [])}>
       <Suspense fallback=''>
         <NavBar />
         <div className='content-page'>
           <Sidebar />
           <AppRouter />
         </div>
       </Suspense>
     </div>
  );
};

export default App;