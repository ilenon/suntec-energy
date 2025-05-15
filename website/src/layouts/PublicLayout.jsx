import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main className="container my-5">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
