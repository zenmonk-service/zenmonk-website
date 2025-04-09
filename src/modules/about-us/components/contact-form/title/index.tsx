import { Typography } from '@mui/material'
import './styles.scss'

export const Title = ({ text }: { text: string }) => {
  return (
    <Typography component="h3" className="form-title">
      {text}
    </Typography>
  )
}
