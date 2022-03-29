import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getAllBooks } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div className='App'>
      <h1>Address Book</h1>
      <Outlet />
    </div>
  );
}

export default App;
