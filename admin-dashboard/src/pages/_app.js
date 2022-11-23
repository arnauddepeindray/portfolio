// ** Next Imports
import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { useEffect } from "react";

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/AdminLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'


// ** Boostrap css
import 'bootstrap/dist/css/bootstrap.css'


// ** Global css styles
import '../../styles/globals.css'
import AdminLayout from 'src/layouts/AdminLayout';
import { SessionProvider, useSession } from "next-auth/react"
import Error500 from './500';


const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps: {session, ...pageProps} } = props

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);


  // Variables
  const getLayout = Component.getLayout ?? (page => <AdminLayout>{page}</AdminLayout>)

  

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} `}</title>
        <meta
          name='description'
          content={`${themeConfig.templateName}`}
        />
        <meta name='keywords' content='Admin dashboard' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return <ThemeComponent settings={settings}>{
            getLayout(
              <SessionProvider session={session}>
                {Component.auth ? (
                  <Auth>
                    <Component {...pageProps} />
                  </Auth>
                ) : (
                  <Component {...pageProps} />
                )}
                
              </SessionProvider>)
              
            }</ThemeComponent>
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  )
}

const Auth = ({children}) => {
  const router = useRouter();
  const { status } = useSession({ required: true, 

    onUnauthenticated() {
        router.push({pathname: "/500", query: {message: 'Accès refusé'}});
    }
    
  })

  if(status === "loading"){
      return (
      <div><p>Loading</p></div>
      )

  }



  return children

}

export default App
