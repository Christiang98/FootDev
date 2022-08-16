import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { green, red } from '@mui/material/colors';
import Logo from "../../../assets/img/Logo.png"
import "./ThirdCards.css"

export const ThirdCards = () => {
  return (
    <>
    <div className='ContainerThirdCard'>
                {/* PRIMERA CARTA */}
                <Card sx={{ maxWidth: 350, maxHeight: 500 }}>
                    <Avatar sx={{ bgcolor: green[500], height: 60, width: 60, margin: 1 }}>
                        <img src={Logo} width="50px" />
                    </Avatar>
                    <CardActionArea>
                        <CardMedia
                          sx={{ width:205,marginLeft:9,marginRight:13}}
                            component="img"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre: Bayern Munich
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga: Bundesliga
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt:Julian Nagelsmann
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio:Allianz Arena
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Formacion: 4-2-3-1
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
                            sx={{ width:150,marginLeft:12,marginRight:12}}
                            component="img"
                            image="https://logodownload.org/wp-content/uploads/2017/02/liverpool-fc-logo-escudo-2.png"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre: Liverpool
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga: Premier League
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt: Jugen Klopp
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio: Afield
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
                            image="https://cdn.milenio.com/uploads/media/2019/02/13/escudo-ajax.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre: Ajax
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga: Eredivisie
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt: Alfred Schreuder
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio: Johan Cruyff Arena
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
                           sx={{ width:140,marginLeft:12,marginRight:10}}
                            component="img"
                            image="https://assets.stickpng.com/images/584a9b47b080d7616d298778.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                Datos del equipo
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Nombre: Real Madrid
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Liga: La liga
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Dt: Carlos Ancelloti
                            </Typography>
                            <Typography variant="body2" color="black" align='center'>
                                Estadio: Santigo Bernabeu
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
export default ThirdCards