import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import AppRoutes from '../Routes/Routes';
import Footer from '../Footer/Footer';

import { useDispatch } from 'react-redux';
import { getCategories } from '../../features/categories/CategoriesSlice';

 const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]); 

  return (
    <div className='app'>
        <Header />
        <div className="container">
            <AppRoutes />
            <Sidebar />
        </div>    
        <Footer />
    </div>
  )
}

export default App;
