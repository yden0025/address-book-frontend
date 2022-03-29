import React from 'react';
import ReactDOM from 'react-dom';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';
import './index.css';
import AddressBook from './pages/AddressBook';
import Contact from './pages/Contact';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserHistory } from "history";
const history = createBrowserHistory({ window });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<AddressBook />} />
            <Route path='contacts/:book_id' element={<Contact />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

