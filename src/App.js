import Header from './components/Header'
import Footer from './components/Footer'

import s from './App.module.css'

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.content}>
        <div className={s.message}>
          <h2 className={s.title}>We'll be back soon! </h2>
          <p>
            The website is under maintenance. Please join{' '}
            <a
              href='https://discord.com/invite/lootexio'
              className={s.link}
              target='_blanck'
            >
              Our Discord
            </a>{' '}
            or check out the latest information on{' '}
            <a
              href='https://twitter.com/LootexIO'
              className={s.link}
              target='_blanck'
            >
              Twitter
            </a>
            .
          </p>
        </div>
        <div className={s.imageWrapper}>
          <img src='./assets/pic_maintenance.png' alt='maintenance' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
