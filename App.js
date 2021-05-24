import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Rooms from './components/Rooms';
import CreateEditPage from './pages/CreateEditPage';

import Layout from './components/Layout/Layout';

import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';


function App() {
const authCtx = useContext(AuthContext);

const rooms = [
  {
    title: 'Room',
    delete: 'Delete',
    navigation: 'Create/Edit',
  },
  {
    title: 'Room2',
    delete: 'Delete2',
    navigation: 'Nav',

  },
  {
    title: 'Room3',
    delete: 'Delete3',
    navigation: 'Nav',

  },
];


  return (
    <Layout>
      <Switch>








        {!authCtx.isLoggedIn && (<Route path='/'>
          <AuthPage />

        </Route>
      )}

        

          <Route path='/' exact>
            <HomePage />
            <div>
            <Rooms items={rooms} />

            </div>

          </Route>

          <Route path='/CreateEditPage'>
            <CreateEditPage />

          </Route>

        <Route path='*'>
          <Redirect to='/'/>

        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
