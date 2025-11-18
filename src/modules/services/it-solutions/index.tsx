import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import { OurServices } from '@/app/(routes)/services/our-services'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { ArrowRight } from './assets'
import styles from './it-solution.module.scss'

const cardStyles = [
  { background: '#F0FCFF', fill: '#61DAFB' },
  { background: '#FCE6EB', fill: '#D0294E' },
  { background: '#EEF6ED', fill: '#539E43' },
  { background: '#FFF0E6', fill: '#FF6600' },
  { background: '#EBF1FD', fill: '#326CE5' },
  { background: '#F8F2FF', fill: '#B47BFF' },
]

const ItSolutions = ({ id }: { id: string }) => {
  const { services } = OurServices.find((service) => service.id === id)!
  return (
    <div className={styles.wrapper} id={id}>
      <div className={styles.container}>
        <SectionTitle
          text="Future-Ready IT Solutions for Your Business Growth"
          markText="Growth"
          markTextProps={{ rotate: 2 }}
        />
        <SectionDescription
          className={styles.subtitle}
          text="Empower your business with cutting-edge IT solutions that drive
          innovation, efficiency, and scalability. Our team delivers tailored
          strategies and state-of-the-art technology to enhance your operations."
        />
        <Grid
          container
          rowSpacing={{ xs: '14px', sm: '28px', md: '2vw' }}
          columnSpacing={{ xs: '14px', sm: '28px', md: '2vw' }}
          className={styles.containerGrid}
          sx={{ justifyContent: 'center' }}
        >
          {services.map((service, index) => {
            const { background, fill } = cardStyles[index]
            return (
              <Grid key={service.id} > {/* item */}
                <div className={styles.card}>
                  <div
                    style={{ backgroundColor: background }}
                    className={styles.left}
                  >
                    <service.icon style={{ fill }} className={styles.icon} />
                  </div>

                  <div className={styles.right}>
                    <p className={styles.title}>{service.title}</p>
                    <p className={styles.description}>{service.description}</p>
                    <Button className={styles.btn} disableRipple>
                      Read More
                      <ArrowRight style={{ width: '1.04vw' }} />
                    </Button>
                  </div>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default ItSolutions
