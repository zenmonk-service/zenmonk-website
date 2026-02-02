'use client'

import { Grid2 } from '@mui/material'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import useMediaQuery from '@mui/material/useMediaQuery'
import { socialMedia } from '@/assets/icons/social'
import { SectionDescription } from '@/shared/typography'
import OfficialLogo from './assets/official-logo.svg'
import ListHeading from './list-heading/list-heading'
import ListItem from './list-items/list-items'
import { consultingCategories } from './list/consulting-categories'
import { quickLink } from './list/quick-links'
import { serviceCategory } from './list/service-categories'
import './styles.scss'

const QuickLinks = () => (
  <Grid2 size={{ xs: 5, sm: 3, md: 2 }} mt={{ xs: 2, md: 0 }}>
    <ListHeading title="Quick links" />
    {quickLink.map((item) => (
      <ListItem text={item.title} key={item.id} />
    ))}
  </Grid2>
)

const FollowUs = () => (
  <Grid2 size={{ xs: 5, md: 2.5 }} mt={{ xs: 2, md: 0 }}>
    <ListHeading title="Follow Us" />
    <div className="social-media-list">
      {socialMedia.map((item, index) => (
        <item.icon key={index} className="icons" />
      ))}
    </div>
  </Grid2>
)

const Footer = () => {
  const isLaptop = useMediaQuery('(max-width:1423px)')
  const isSmallScreen = useMediaQuery('(max-width:600px)')
  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  }

  const columns = chunkArray(serviceCategory, 5)
  const consultingColumns = chunkArray(consultingCategories, 5)

  return (
    <div className="footer-section">
      <div className="header">
        {isLaptop && (
          <div className="logo-wrapper">
            <OfficialLogo className="logo" />
          </div>
        )}

        <SectionDescription
          className="branding"
          text="We deliver transformative digital experiences more than just software that takes your business forward. 
          Let us craft the beautiful chapter of your success story!"
        />
      </div>
      <div className="logo-category-wrapper">
        {!isLaptop && (
          <div className="logo-wrapper">
            <OfficialLogo className="logo" />
          </div>
        )}
        <div className="category-wrapper">
          <div className="service-category-quick-links-wrapper">
            <div className="service-category">
              <Grid2 columnSpacing={4} container columns={10}>
                {columns.map((column, colIndex) => (
                  <Grid2 size={{ xs: 5, sm: 3, md: 2 }} key={colIndex}>
                    <ListHeading title={!colIndex ? 'Services' : '‎'} />
                    {column.map((item) => (
                      <ListItem text={item.title} key={item.id} />
                    ))}
                  </Grid2>
                ))}
                {!isSmallScreen && <QuickLinks />}
              </Grid2>
            </div>
          </div>
          <div className="consulting-category-contact-wrapper">
            <div className="consulting-category">
              <Grid2 columnSpacing={4} columns={10} container>
                {consultingColumns.map((column, colIndex) => (
                  <Grid2
                    size={{ xs: 5, sm: colIndex ? 4 : 3, md: 2 }}
                    mt={{ xs: 1, sm: 0 }}
                    key={colIndex}
                  >
                    <ListHeading title={!colIndex ? 'Consulting' : '‎'} />
                    {column.map((item) => (
                      <ListItem text={item.title} key={item.id} />
                    ))}
                  </Grid2>
                ))}
                {isSmallScreen && (
                  <>
                    <QuickLinks />
                    <FollowUs />
                  </>
                )}
                <Grid2 size={{ xs: 10, sm: 7, md: 3 }} mt={{ xs: 2, md: 0 }}>
                  <ListHeading title="Subscribe Us" />
                  <ListItem text="Make the right business move" />
                  <div className="email">
                    <InputBase
                      placeholder="Email Address"
                      className="input-field"
                      slotProps={{
                        input: {
                          className: 'input',
                        },
                      }}
                      endAdornment={
                        <Button variant="contained" className="submit-button">
                          Submit
                        </Button>
                      }
                    />
                  </div>
                </Grid2>
                <Grid2 size={0.1} />
                {!isSmallScreen && <FollowUs />}
              </Grid2>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <SectionDescription text="© Zenmonk 2026" />
      </div>
    </div>
  )
}

export { Footer }
