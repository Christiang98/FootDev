import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Logo from "../../../assets/img/Logo.png"
import futbolNacional from "../../../assets/img/futbolNacional.png"
import "./CardLocal.css"

export default function CardLocal() {
    return (
        <>
            <div className='titleSection'>
                <img className='iconLocal' src={futbolNacional} />
                <h3 className='sectionLocal'>Futbol local</h3>
            </div>

            <div className='cointainerCardNews'>
                {/* FIRST CARD */}
                <Card sx={{ maxWidth: 370 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                <img src={Logo} className="logocard" />
                            </Avatar>
                        }
                        title="¿Por qué Solari festeja los goles asi?"
                        subheader="12 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://images.ole.com.ar/2022/08/13/R4l79w77f_1256x620__1.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Como hizo en más de una ocasión en Colo-Colo (convirtió 10 tantos), Solari le dedicó los gritos de gol a su abuelo materno, Feliciano, de extensa carrera militar. El jugador de 21 años lo llegó a conocer por poco, ya que falleció cuando él era muy chico, pero nunca dejaron de contarle cosas. De grande, y ante un Monumental repleto, lo sigue homenajeando.
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{fontSize: 35}} />
                    </IconButton>
                </Card>
                {/* FIRST CARD */}

                {/* SECOND CARD */}
                <Card sx={{ maxWidth: 370 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                <img src={Logo} className="logocard" />
                            </Avatar>
                        }
                        title="Benedetto podria juagar de titular"
                        subheader="3 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://images.ole.com.ar/2022/08/13/lywH8CKCC_1256x620__2.jpg#1660406633757"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Es como si el tiempo se hubiera detenido para Darío Benedetto después de lo que vivió ante Corinthians y Talleres con la polémica arenga, los tres penales fallados y la eliminación de Boca de la Copa Libertadores. Una lesión en un tobillo lo tuvo a maltraer y nunca le permitió dejar atrás todo eso dentro de la cancha.
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{fontSize: 35}}/>
                    </IconButton>
                </Card>
                {/* SECOND CARD */}

                {/* THIRD CARD */}
                <Card sx={{ maxWidth: 370 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                <img src={Logo} className="logocard" />
                            </Avatar>
                        }
                        title="Adonis Frías por su frustrado pase a Boca"
                        subheader="8 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://media.tycsports.com/files/2022/07/25/457003/adonis-frias_862x485.webp"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Tengo mucha bronca, estoy esperando que alguien me dé una explicación de lo que pasó”, fue la contundente frase que soltó el zaguero de 24 años, que en reiteradas ocasiones ya había dejado en claro que es hincha del conjunto de La Ribera y su deseo es jugar allí.
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{fontSize: 35,marginTop:2}}/>
                    </IconButton>
                </Card>
                {/* THIRD CARD */}
                {/* CUARTA CARTA */}
                <Card sx={{ maxWidth: 370 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                <img src={Logo} className="logocard" />
                            </Avatar>
                        }
                        title="Gran victoria del equipo ingles"
                        subheader="13 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://media.tycsports.com/files/2022/08/12/464477/zarate-apunto-a-un-hincha-de-platense_416x234.webp"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Zárate, de penal, fue el encargado de poner el 1-1 transitorio de Platense ante Banfield y en vez de festejar, el delantero corrió directo a buscar a un hincha del Calamar. Pero no quedó ahí, debido a que después del segundo tanto, que hizo Jorge Benítez, volvió a dedicarle el tanto al simpatizante.
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{fontSize: 35,marginTop:2}}/>
                    </IconButton>
                </Card>
                {/* CUARTA CARTA */}
            </div>


        </>
    );
}