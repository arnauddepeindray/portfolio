// ** MUI Imports
import Grid from '@mui/material/Grid'


// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Import Cards
import CardProject from 'src/views/cards/CardProject'
import CardFormation from 'src/views/cards/CardFormation'
import CardExperience from 'src/views/cards/CardExperience'
import CardSkill from 'src/views/cards/CardSkill'



const Portfolio = () => {

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={5}>
          <CardProject />
        </Grid>
        <Grid item xs={12} md={5}>
          <CardFormation />
        </Grid>

        <Grid item xs={12} md={5}>
          <CardExperience />
        </Grid>

        <Grid item xs={12} md={5}>
          <CardSkill />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Portfolio

Portfolio.getLayout = (page) => {

  return (
    <Grid>
{page}
    </Grid>
      
  )
};