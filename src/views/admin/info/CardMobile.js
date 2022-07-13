// ** MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const CardMobile = ({ programador }) => {
  
  return (
    <Card>
      <Grid container spacing={6}>
        <StyledGrid item md={5} xs={12}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* <img width={137} height={176} alt='Apple iPhone 11 Pro' src={programador?.fotoUrl} /> */}
            <img width={100} height={100} alt='Avatars' src={programador?.fotoUrl} />
          </CardContent>
        </StyledGrid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            paddingTop: ['0 !important', '0 !important', '1.5rem !important'],
            paddingLeft: ['1.5rem !important', '1.5rem !important', '0 !important']
          }}
        >
          <CardContent>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              {programador?.nombre}
            </Typography>
            <Typography variant='body1' sx={{ marginBottom: 3.5 }}>
              Email: {programador?.email}
            </Typography>
            <Typography variant='body1' sx={{ marginBottom: 3.5 }}>
              Github: {programador?.github}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMobile
