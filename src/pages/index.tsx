import { Inter } from 'next/font/google'
import LoginPage from '@/components/templates/LoginPage'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return <LoginPage />
}
