import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import UserManagement from './pages/UserManagement/UserManagement';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminTemplate from './template/AdminTemplate';
import CourseManagement from './pages/CourseManagement/CourseManagement';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <AdminTemplate path="/admin/quanlynguoidung" component={UserManagement} />
      <AdminTemplate path="/admin/quanlykhoahoc" component={CourseManagement} />
        <Route exact path="/dangky" component={Login} />
        {/* <Route exact path="/admin/quanlynguoidung" component={UserManagement} /> */}
        <Route exact path="/search" component={SearchPage} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;