import Head from "next/head";
import Link from "next/link";
import ActiveLink from "../components/ActiveLink";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-simple-icons/github";
import linkedinIcon from "@iconify/icons-simple-icons/linkedin";
import twitterIcon from "@iconify/icons-simple-icons/twitter";

function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="w-full h-16 border-b border-purple-500 flex items-center justify-center">
          <div className="w-11/12 md:w-full max-w-3xl flex flex-row justify-between">
            <div className="text-2xl text-purple-500">
              <ActiveLink href="/">
                <a>My Blog</a>
              </ActiveLink>
            </div>
            <AppNav />
          </div>
        </header>
        <main className="w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow">
          {children}
        </main>
        <footer className="flex flex-col items-center justify-center w-full h-24 text-gray-600 border-t border-purple-500">
          <nav className="flex flex-row">
            <a className="mr-6" href="https://github.com/FCardellino">
              <Icon className="w-6 h-6" icon={githubIcon} />
            </a>
            <a className="mr-6" href="https://www.linkedin.com/in/fernando-cardellino/">
              <Icon className="w-6 h-6" icon={linkedinIcon} />
            </a>
            <a href="https://twitter.com/MapaMundos">
              <Icon className="w-6 h-6" icon={twitterIcon} />
            </a>
          </nav>
          <div className="mt-2">
            Made with <a href="https://nextjs.org/"> Next.js </a>
          </div>
        </footer>
      </div>
    </>
  );
}

function AppNav() {
  return (
    <nav className="text-2xl text-gray-600">
      
      
      <ActiveLink href="/" activeClassName="text-purple-500">
        <a className="hover:text-purple-500">Blog </a>
      </ActiveLink>
    
      <ActiveLink href="/about" activeClassName="text-purple-500">
        
        <a className="hover:text-purple-500">About</a>
        
      </ActiveLink>
    </nav>
  );
}



export default Layout;







{/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest"/> */}