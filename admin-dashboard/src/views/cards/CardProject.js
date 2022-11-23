// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'



// Styled component for the trophy image
const ProjectImg = styled('img')({
  right: 40,
  bottom: 20,
  height: 98,
  position: 'absolute',
})

const CardProject = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>Mes projets</Typography>
        <Typography className='mr-4' variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Ajout/Suppression/Modification
        </Typography>
        
        <Button className='mt-1' size='small' variant='contained'>
          Voir les projets
        </Button>
        <ProjectImg  alt='trophy' src='/images/cards/ProjectIcone.png' />
      </CardContent>
    </Card>
  )
}

export default CardProject
