import Home from './Pages/Home/Home'
import Contacts from './Pages/Contacts/Contacts'
import NotFound from './Pages/NotFound/NotFound'

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/contacts',
    exact: true,
    component: Contacts
  },
  {
    path: '*',
    component: NotFound,
    status: 404
  }
]