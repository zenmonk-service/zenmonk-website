import { motion } from 'framer-motion'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import WifiIcon from '@mui/icons-material/Wifi'
import styles from './styles.module.scss'

const FloatingPhone = () => {
  return (
    <div className={styles.outerPad}>
      <motion.div
        initial={{ transform: 'translateZ(8px) translateY(-2px)' }}
        animate={{ transform: 'translateZ(32px) translateY(-8px)' }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
          ease: 'easeInOut',
        }}
        className={styles.innerPad}
      >
        <div className={styles.cameraDot} />
        <div className={styles.headerIcons}>
          <WifiIcon fontSize="small" />
          <BatteryChargingFullIcon fontSize="small" />
        </div>
        <Screen />
      </motion.div>
    </div>
  )
}

const Screen = () => {
  return (
    <div className={styles.screen}>
      <img
        src="/our-work/01.webp"
        alt="Website Screenshot"
        className={styles.screenImage}
      />
    </div>
  );
};


export default FloatingPhone
