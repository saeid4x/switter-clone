import type { AppProps } from 'next/app'
 
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast'
import EditModal from '@/components/modals/EditModal'
 

export default function App({ Component, pageProps }: AppProps) {
  return  ( 
    <SessionProvider session={pageProps.session}>
      {/* <Modal isOpen title='test title' actionLabel='Submit'/> */}
      <Toaster />
      <EditModal />
      <LoginModal />
      <RegisterModal />
        <Layout> 
        <Component {...pageProps} />
        </Layout>
    </SessionProvider>
  )
      
  
}