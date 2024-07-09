import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Layout = ({children, title = 'The default title'})=> {
  return (
    <div>
      <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
      <nav>
        <Link href='/'>Home</Link> | {' '}
        <Link href='/login'>Login</Link> | {' '}
        <Link href='/register'>Register</Link> | {' '}
        <Link href='/forum'>Forum</Link> | {' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
    </div>
    
  )
}

export default Layout
