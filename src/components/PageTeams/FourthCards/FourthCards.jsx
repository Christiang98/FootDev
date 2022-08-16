import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { green, red } from '@mui/material/colors';
import Logo from "../../../assets/img/Logo.png"
import "./FourthCards.css"

export const FourthCards = () => {
  return (
    <>
    <div className='ContainerFourthCars'>
    {/* PRIMERA CARTA */}
    <Card sx={{ maxWidth: 350, maxHeight: 500 }}>
                    <Avatar sx={{ bgcolor: green[500], height: 60, width: 60, margin: 1 }}>
                        <img src={Logo} width="50px" />
                    </Avatar>
                    <CardActionArea>
                        <CardMedia
                          sx={{ width:240,marginLeft:6,marginRight:18}}
                            component="img"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Real_Betis.svg/1200px-Real_Betis.svg.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre: Real Betis
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga: La liga
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt: Manuel Pellegrini
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio: Benito Villamarin
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Formacion:  4-2-3-1
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
                            sx={{ width:125,marginLeft:12,marginRight:12}}
                            component="img"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/1200px-Juventus_FC_2017_icon_%28black%29.svg.png"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre: Juventus
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga:Serie A
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt: Massimiliano Allegri
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio: Allianz Stadium
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Formacion: 4-4-2
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
                           sx={{ width:200,marginLeft:10,marginRight:15}}
                            component="img"
                            image="http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/44.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre: Benfica
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga:  Primeira Liga
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt: Roger Schmidt
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio:  Estadio da Luz 
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Formacion: : 4-2-3-1
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {/* CUARTA TARGETA */}
                <Card sx={{ minWidth: 350, maxHeight: 500 }}>
                    <Avatar sx={{ bgcolor: green[500], height: 60, width: 60, margin: 1 }}>
                        <img src={Logo} width="50px" />
                    </Avatar>
                    <CardActionArea>
                        <CardMedia
                           sx={{ width:200,marginLeft:12,marginRight:10}}
                            component="img"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/640px-Palmeiras_logo.svg.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre:Palmeiras
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga: Brasilerao Serie A
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt: Abel Ferreira
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio: Allianz Parque
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Formacion: 4-2-3-1
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
    </>
  )
}
export default FourthCards