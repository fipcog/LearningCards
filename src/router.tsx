import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout } from './Layout'
import { CheckEmail } from './components/auth/checkEmail'
import { SignIn } from './components/auth/signIn'
import { SignUp } from './components/auth/signUp'
import { Deck } from './pages/deck'
import { DecksPage } from './pages/deckPage'
import { QuestionCard } from './pages/questionCard'
import { useGetAuthQuery } from './services/auth-api'

const publicRouts: RouteObject[] = [
  {
    element: <SignIn />,
    path: '/login',
  },
  {
    element: <SignUp />,
    path: '/signUp',
  },
  {
    element: <CheckEmail />,
    path: '/checkEmail/:email',
  },
]

const privatRouts: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/decks/:pageCount',
  },
  {
    element: <Navigate to={'/decks/1'} />,
    path: '/',
  },
  {
    element: <QuestionCard />,
    path: '/learn/:deckId',
  },
  {
    element: <Deck />,
    path: '/deck/:deckId/:pageCount',
  },
]

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privatRouts,
        element: <PrivateRoutes />,
      },
      ...publicRouts,
    ],
    element: <Layout />,
  },
])

function PrivateRoutes() {
  const isAuthenticated = false
  const { isError } = useGetAuthQuery()

  return !isError ? <Outlet /> : <Navigate to={'/login'} />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
