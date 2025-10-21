import React from 'react'
// import FortipaySvg from '../assets/correctfortipay.svg'
// import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
         <div className="w-full min-h-screen bg-white flex flex-col">
        <main className="flex-1">
            {children}
        </main>
        <Footer />
        </div>
  )
}

export default Layout