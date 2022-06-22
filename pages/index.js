import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Akhil Raj || @NIT Calicut</title>
      </Head>
      <Main/>
      <About/>
      <Skills/>
      
    </div>
  )
}
