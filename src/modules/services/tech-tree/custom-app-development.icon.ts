import AndroidIcon from './assets/custom-app-development-tree/android.svg'
import FirebaseIcon from './assets/custom-app-development-tree/firebase.svg'
import FlutterIcon from './assets/custom-app-development-tree/flutter.svg'
import IosIcon from './assets/custom-app-development-tree/ios.svg'
import ReactIcon from './assets/custom-app-development-tree/react.svg'

export const CustomAppDevelopmentTreeIcons = [
  {
    icon: ReactIcon,
    position: 'top',
    label: 'React Native',
    backgroundColor: 'rgba(97, 218, 251, 0.14)',
    style: { left: '43%', top: '0%', width: '17%' },
  },
  {
    icon: FlutterIcon,
    position: 'bottom-right-leaf',
    label: 'Flutter',
    backgroundColor: '#E3F2FD',
  },
  {
    icon: FirebaseIcon,
    position: 'top-leaf-right',
    label: 'Firebase',
    backgroundColor: '#FFF3D6',
    padding: 'max(10px, 0.8vw)',
  },
  {
    icon: IosIcon,
    position: 'top-left-leaf',
    label: 'iOS',
    backgroundColor: '#F0F0F0',
  },
  {
    icon: AndroidIcon,
    position: 'bottom-left-leaf',
    label: 'Android',
    backgroundColor: '#E8F7EE',
    padding: 'max(12px, 1.0vw)',
  },
]
