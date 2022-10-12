import FooterSocialLink from './FooterSocialLink'

import Discord from './icons/Discord'
import Twitter from './icons/Twitter'
import Facebook from './icons/Facebook'
import Telegram from './icons/Telegram'
import Medium from './icons/Medium'
import Gitbook from './icons/Gitbook'

import s from './Footer.module.css'

const items = [
  {
    title: 'discord',
    link: 'https://discord.com/invite/lootexio',
    imageUrl: <Discord />
  },
  {
    title: 'twitter',
    link: 'https://twitter.com/LootexIO',
    imageUrl: <Twitter />
  },
  {
    title: 'telegram',
    link: 'https://t.me/lootexIO',
    imageUrl: <Telegram />
  },
  {
    title: 'facebook',
    link: 'https://www.facebook.com/lootexio/',
    imageUrl: <Facebook />
  },
  {
    title: 'medium',
    link: 'https://medium.com/lootex',
    imageUrl: <Medium />
  },
  {
    title: 'gitbook',
    link: 'https://lootex.gitbook.io/docs/v/english',
    imageUrl: <Gitbook />
  }
]

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.legal}>
        <small>© 2020 - 2022 Lootex.io</small>
      </div>
      <nav className={s.social}>
        {items.map((item) => (
          <FooterSocialLink key={item.title} item={item} />
        ))}
      </nav>
    </footer>
  )
}

export default Footer
