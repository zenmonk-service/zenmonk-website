import './styles.scss'

const SectionDescription = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <p
      className={`custom-section-description ${className ?? ''}`}
    >
      {text}
    </p>
  )
}

export { SectionDescription }
