'use client'

import Image from 'next/image'
import Link from 'next/link'
import { socialMedia } from '@/assets/icons/social'
import { SectionDescription } from '@/shared/typography'
import ListHeading from './list-heading/list-heading'
import ListItem from './list-items/list-items'
import { quickLink } from './list/quick-links'
import { serviceCategory } from './list/service-categories'
import './styles.scss'

const Footer = () => {
  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  }

  const serviceColumns = chunkArray(serviceCategory, 5)

  return (
    <footer className="footer-section">
      <div className="top-banner">
        <Link href="/" className="logo-wrapper logo-mobile" prefetch={false}>
          <Image
            src="/logo.svg"
            alt="Zenmonk Logo"
            width={85}
            height={109}
            className="logo"
            priority
          />
        </Link>
        <p className="branding-text">
          Over the last decade, we have helped our clients ship products for multiple platforms. We can create the software your business needs to grow!
        </p>
      </div>

      <div className="divider" />

      <div className="main-content">
        <Link href="/" className="logo-wrapper logo-desktop" prefetch={false}>
          <Image
            src="/logo.svg"
            alt="Zenmonk Logo"
            width={140}
            height={179}
            className="logo"
            priority
          />
        </Link>

        <div className="services-column-group">
          <ListHeading title="Services" />
          <div className="services-subcolumns">
            {serviceColumns.map((col, colIndex) => (
              <div key={colIndex} className="service-subcolumn">
                {col.map((item) => (
                  <ListItem text={item.title} link={item.link} key={item.id} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="quick-links-follow-group">
          <div className="quick-links-column">
            <ListHeading title="Quick Links" />
            {quickLink.map((item) => (
              <ListItem text={item.title} link={item.link} key={item.id} />
            ))}
          </div>

          <div className="follow-us-column">
            <ListHeading title="Follow Us" />
            <div className="social-media-list">
              {socialMedia.map((item) => (
                <a
                  key={item.id}
                  href={item.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon className="icons" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="copyright">
        <SectionDescription text={`© Zenmonk ${new Date().getFullYear()}`} />
      </div>
    </footer>
  )
}

export { Footer }
