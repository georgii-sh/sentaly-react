import Home from './Home/Home'
import Contacts from './Contacts/Contacts'

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/contacts',
    component: Contacts
  }
]