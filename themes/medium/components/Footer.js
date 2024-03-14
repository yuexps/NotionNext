import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer
      className='z-10 dark:bg-hexo-black-gray flex-shrink-0 justify-center text-center m-auto w-full leading-6 text-sm p-6 relative'
    >
       <DarkModeButton/>
      <i className='fas fa-copyright' /> {`${copyrightDate}`} <span><i className='mx-1 animate-pulse fas fa-heart'/> <a href={siteConfig('LINK')} className='underline font-bold text-gray-500 dark:text-gray-300 '>{siteConfig('AUTHOR')}</a>.<br/>

      {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt'/> <a href='https://beian.miit.gov.cn/' className='mr-2'>{siteConfig('BEI_AN')}</a><br/></>}
    </footer>
  )
}

export default Footer
