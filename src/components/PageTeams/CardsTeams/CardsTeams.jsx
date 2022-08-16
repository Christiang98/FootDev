
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { green, red } from '@mui/material/colors';
import "./CardsTeams.css"
import River from "../../../assets/Team/River.png"
import Tigre from "../../../assets/Team/Tigre.png"
import Logo from "../../../assets/img/Logo.png"

export const CardsTeams = () => {
  return (
    <>
    <h1 className='titleCardTeams'>Lo mejores equipos de la actualidad</h1>
      <div className='ContainerTeamCards'>
        {/* PRIMERA CARTA */}
        <Card sx={{ maxWidth: 350, maxHeight: 500 }}>
          <Avatar sx={{ bgcolor: green[500], height: 60, width: 60, margin: 1 }}>
            <img src={Logo} width="50px" />
          </Avatar>
          <CardActionArea>
            <CardMedia
              sx={{ width:350,marginRight:14}}
              component="img"
              image={River}

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align='center'>
                Datos del equipo
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Nombre: River Plate
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Liga: Primera division
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Dt: Marcelo Gallardo
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Estadio: El monumental
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Formacion: 4-3-3
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* SEGUNDA CARTA */}
        <Card sx={{ maxWidth: 350, maxHeight: 500 }}>
          <Avatar sx={{ bgcolor: green[500], height: 60, width: 60, margin: 1 }}>
            <img src={Logo} width="50px" />
          </Avatar>
          <CardActionArea>
            <CardMedia
            sx={{ width:350,marginRight:13}}
              component="img"
              image="https://depor.com/resizer/7t1AxRuwf-O4oO5yINEYJN9wtkk=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OUNGUGTXGRGL5II47GEZZLZ7UE.jpg"

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align='center'>
                Datos del equipo
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Nombre: Boca Jrs
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Liga: Primera division
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Dt: Hugo Ibarra
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Estadio: La Bombonera
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Formacion: 4-3-3
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* TERCERA CARTA */}
        <Card sx={{ maxWidth: 350, maxHeight: 500 }}>
          <Avatar sx={{ bgcolor: green[500], height: 60, width: 60, margin: 1 }}>
            <img src={Logo} width="50px" />
          </Avatar>
          <CardActionArea>
            <CardMedia
             sx={{ width:350,marginRight:13}}
              component="img"
              image="https://media.tycsports.com/files/2020/02/10/87179/escudo-de-argentinos_862x485.png?v=1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align='center'>
                Datos del equipo
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Nombre: Argentinos Jrs
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Liga: Primera division
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Dt: Gabriel Milito
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Estadio: Diego Armando Maradona
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Formacion: 4-5-2-1
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* CUARTA TARGETA */}
        <Card sx={{ maxWidth:350, maxHeight: 500 }}>
          <Avatar sx={{ bgcolor: green[500], height: 60, width: 60, margin: 1 }}>
            <img src={Logo} width="50px" />
          </Avatar>
          <CardActionArea>
            <CardMedia
              sx={{ width:159,marginLeft:11,marginRight:15}}
              component="img"
              image="https://upload.wikimedia.org/wikipedia/commons/8/8a/Escudo_del_Club_Atl%C3%A9tico_Tigre.svg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align='center'>
                Datos del equipo
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Nombre: Tigre
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Liga: Primera division
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Dt:Diego Martinez
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Estadio: Jose Dellagivanna
              </Typography>
              <Typography variant="body2" color="black" align='center'>
                Formacion: 4-4-2
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
</div>
    </>
  )
}

export default CardsTeams