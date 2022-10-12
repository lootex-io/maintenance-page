import s from './FooterSocialLink.module.css'

const FooterSocialLink = ({ item: { link, imageUrl } }) => {
  return (
    <a href={link} target='_blanck' className={s.icon}>
      {imageUrl}
    </a>
  )
}

export default FooterSocialLink
