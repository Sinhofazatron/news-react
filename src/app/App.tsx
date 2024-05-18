import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";

const App = () => {
  const {theme } = useTheme()

  return (
     <div className={classNames('app', {}, [theme])}>
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