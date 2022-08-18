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
import fifa from "../../../assets/img/fifa.png"
import Logo from "../../../assets/img/Logo.png"
import "./CardInternational.css"


export default function CardInternational() {
    return (
        <>
            <div className='titleSection'>
                <img className='iconInternational' src={fifa} />
                <h3 className='sectionInternational'>Futbol internacional</h3>
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
                        title="El Milan inicia la defensa del título"
                        subheader="14 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://www.mundodeportivo.com/files/image_948_465/files/fp/uploads/2022/08/13/62f7edfc11ba0.r_d.2056-565-2371.jpeg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            El Milan de Stefano Pioli, vigente campeón de la Serie A italiana, inició la defensa del ‘Scudetto’ superando (4-2) al Udinese en un partido loco que decidieron Brahim Díaz, autor del tercer gol, asistente en el cuarto y MVP indiscutible de la tarde, y el croata Ante Rebic, con un doblete.
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ marginTop:8, fontSize: 35 }} />
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
                        title="Lukaku marca y Dumfries salva al Inter"
                        subheader="11 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://www.mundodeportivo.com/files/image_948_465/files/fp/uploads/2022/08/13/62f8104d7a3a8.r_d.2689-762-1962.jpeg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Un gol de Denzel Dumfries en el 95’ le dio al Inter de Milán un triunfo agónico (1-2) sobre el recién ascendido Lecce, que en su regreso a la Serie A tras siete años de ausencia vio como se le escapaba un valiosísimo punto sobre la bocina.
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ marginTop: 10, fontSize: 35 }} />
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
                        title="Neymar fulmina al Montpellier"
                        subheader="12 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://www.mundodeportivo.com/files/image_948_465/uploads/2022/08/13/62f8103e97693.jpeg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Neymar es otro. Ha mutado, tiene más compromiso, como si se hubiera dado cuenta que no quiere que la historia le recuerde como un gran futbolista que se quedó a medias. Su extraordinario inicio de temporada tuvo continuidad ante el Montpellier, autor de dos tantos que confirmaron su reconciliación con la afición. Reapareció Mbappé, que falló un penalti, poco trascendente en el contexto de un partido decidido por el brasileño, redondeado por el francés y por el debutante Renato Sanches (5-2).
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ fontSize: 35 }}/>
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
                        title="El 'Cholito' ya está en Nápoles"
                        subheader="13 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://www.mundodeportivo.com/files/image_948_465/files/fp/uploads/2022/08/13/62f80101bc45d.r_d.1991-841-2926.jpeg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            El argentino Giovanni Siemone (27 años), todavía jugador del Hellas Verona, llegó este sábado a Nápoles para cerrar su traspaso por el conjunto napolitano. El ariete ya superó los exámenes médicos pertinentes y acudió a la ciudad deportiva del Nápoles para reunirse con la directiva y firmar su nuevo contrato.
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ marginTop:6, fontSize: 35 }}/>
                    </IconButton>
                </Card>
                {/* CUARTA CARTA */}
            </div>
        </>
    );
}