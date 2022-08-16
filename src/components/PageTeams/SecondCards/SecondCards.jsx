import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { green, red } from '@mui/material/colors';
import Logo from "../../../assets/img/Logo.png"
import "./SecondCards.css"

export const SecondCards = () => {
    return (
        <>
            <div className='ContainerSecondCard'>
                {/* PRIMERA CARTA */}
                <Card sx={{ maxWidth: 350, maxHeight: 500 }}>
                    <Avatar sx={{ bgcolor: green[500], height: 60, width: 60, margin: 1 }}>
                        <img src={Logo} width="50px" />
                    </Avatar>
                    <CardActionArea>
                        <CardMedia
                          sx={{ width:205,marginLeft:9,marginRight:13}}
                            component="img"
                            image="https://www.futbox.com/img/v1/dec/a16/2de/d5b/5f48ab31361e15ec1700_zoom.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre: Paris Saint-Germain
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga: Ligue 1
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt: Cristopher Galtier
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio: Parc des Prices
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Formacion: 3-4-1-2
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
                            sx={{ width:205,marginLeft:9,marginRight:13}}
                            component="img"
                            image="https://logodownload.org/wp-content/uploads/2017/02/manchester-city-fc-logo-escudo-badge.png"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre: Marchester City
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga: Preimier League
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt: Pep Guardiola
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio: City of Manchester Stadium
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
                           sx={{ width:200,marginLeft:10,marginRight:15}}
                            component="img"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre: Inter
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga: Seria
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt: Filipo Inzagui
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio: Giuseppe Meazza
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Formacion: 4-3-3
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
                           sx={{ width:205,marginLeft:9,marginRight:13}}
                            component="img"
                            image="http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre: Barcelona
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga: La liga
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt: Xavi Hernandez
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio: Camp Nou
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Formacion: 4-3-3
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}
export default SecondCards