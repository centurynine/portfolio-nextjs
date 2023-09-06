import Head from 'next/head'
import { useState } from 'react'
import Bio from './components/Bio'
import Educations from './components/Educations'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div id="home" className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name="My Portfolio Saran"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
     <section className={`${darkMode ? 'color-black' : 'bg-white'} min-h-screen`} >
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Bio darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Educations darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Analytics />
     </section> 
    </main>
    </div>
  )
}
