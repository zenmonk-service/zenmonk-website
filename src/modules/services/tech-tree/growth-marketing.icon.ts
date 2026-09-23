import CanvaIcon from './assets/growth-marketing-tree/canva.svg'
import GoogleAdsIcon from './assets/growth-marketing-tree/google-ads.svg'
import GoogleAnalyticsIcon from './assets/growth-marketing-tree/google-analytics.svg'
import HubspotIcon from './assets/growth-marketing-tree/hubspot.svg'
import MetaIcon from './assets/growth-marketing-tree/meta.svg'
import SemrushIcon from './assets/growth-marketing-tree/semrush.svg'

export const GrowthMarketingTreeIcons = [
  {
    icon: MetaIcon,
    position: 'top-leaf',
    label: 'Meta',
    backgroundColor: '#E9F5FE',
    padding: 'max(11px, 0.85vw)',
  },
  {
    icon: SemrushIcon,
    position: 'top-leaf-right',
    label: 'Semrush',
    backgroundColor: '#FFF6DB',
    padding: 'max(9px, 0.7vw)',
  },
  {
    icon: GoogleAdsIcon,
    position: 'bottom-right-leaf',
    label: 'Google Ads',
    backgroundColor: '#EBF7FD',
    padding: 'max(14px, 1.1vw)',
  },
  {
    icon: CanvaIcon,
    position: 'top-left-leaf',
    label: 'Canva',
    backgroundColor: '#E0E9FB',
    padding: 'max(14px, 1.1vw)',
  },
  {
    icon: HubspotIcon,
    position: 'left-filler-leaf',
    label: 'HubSpot',
    backgroundColor: '#FFF0E6',
    padding: 'max(7px, 0.55vw)',
    style: { width: '15%', top: '38%', left: '0%' },
  },
  {
    icon: GoogleAnalyticsIcon,
    position: 'bottom-left-leaf',
    label: 'Google Analytics',
    backgroundColor: '#FFF6DB',
    padding: 'max(12px, 0.95vw)',
  },
]
