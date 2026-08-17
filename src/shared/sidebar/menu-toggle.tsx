import { motion } from 'framer-motion'

interface Props {
  toggle: () => void
  className: string
  isOpen: boolean
}

const Path = ({ stroke, ...props }: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={stroke}
    strokeLinecap="round"
    {...props}
  />
)

export const MenuToggle = ({ toggle, className, isOpen }: Props) => {
  const strokeColor = '#ffffff'
  return (
    <button onClick={toggle} className={className}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          stroke={strokeColor}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 2.5 4.5 L 20.5 4.5' },
            open: { d: 'M 3.5 18.5 L 17.5 4.5' },
          }}
        />
        <Path
          d="M 2.5 11.423 L 20.5 11.423"
          stroke={strokeColor}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          stroke={strokeColor}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 2.5 18.346 L 20.5 18.346' },
            open: { d: 'M 3.5 4.5 L 17.5 18.346' },
          }}
        />
      </svg>
    </button>
  )
}
