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
import libertadores from "../../../assets/img/libertadores.png";
import Logo from "../../../assets/img/Logo.png"
import "./CardLibertadores.css"


export default function CardLibertadores() {
    return (
        <>
            <div className='titleSection'>
                <img className='iconLibertadores' src={libertadores} />
                <h3 className='sectionLibertadores'>Libertadores</h3>
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
                        title="Particular definición de Cacique Medina
                        "
                        subheader="14 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://images.ole.com.ar/2022/08/03/l3rdDXEXe_720x0__1.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            A finales de mayo, Alexander Medina firmó contrato con Vélez para convertirse en el nuevo entrenador del club. Y a dos meses y medio de aquella primera foto oficial, la dirigencia y los hinchas celebran su llegada con el pase a las semifinales de la Copa Libertadores. Tras haber eliminado a River y a Talleres, ahora tendrán un nuevo desafío: Flamengo. Sin embargo, desde el cuerpo técnico aseguran que no es imposible a pesar del Dream Team que tienen los brasileños.
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ marginTop:2, fontSize: 35 }} />
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
                        title="Athletico-PR, semifinalista sobre la hora"
                        subheader="12 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://cmscdnus.yinzcam.com/Toolbox/media/CSF_LIB/000_32GD9BU.jpg?clxf=w_2000%2ch_2000%2cc_limit%2cf_jpg%2cq_90"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Tal como en el duelo de ida en Curitiba, se dio otro partido friccionado, trabajado y luchado en el que los arqueros Bento y Andújar trabajaron para sostener su valla invicta y que se terminó resolviendo en los instantes finales. A los 90+6', los dos jóvenes delanteros brasileños que hizo ingresar el entrenador Luiz Felipe Scolari en el segundo tiempo resolvieron el partido: Vitor Roque conectó un centro de Vitinho desde la derecha y estampó, de cabeza, el 1-0 para sentenciar el pase del Furacão a la próxima ronda.
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{fontSize: 35 }}/>
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
                        title="Palmeiras y Vélez, a Semifinales"
                        subheader="10 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="260"
                        image="https://cmscdnus.yinzcam.com/Toolbox/media/CSF_LIB/tWoRCm2klnthoZ6YPAFicef2D5KacfuxrALHuSMz.jpeg?clxf=w_2000%2ch_2000%2cc_limit%2cf_jpg%2cq_90"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            La CONMEBOL Libertadores entra en su etapa decisiva y este miércoles se definieron dos semifinalistas en dos emotivos partidos: Palmeiras y Vélez se metieron entre los 4 mejores del continente. Los bicampeones vigentes derrotaron por penales a Atlético Mineiro tras terminar el partido con 9 hombres, mientras que los argentinos vencieron 1-0 a Talleres, en Córdoba, y avanzaron..
                        </Typography>
                    </CardContent>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ marginTop:7, fontSize: 35 }}/>
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
                        title="Flamengo, el primer semifinalista"
                        subheader="9 de Agosto de 2022"
                    />
                    <CardMedia
                        component="img"
                        height="250"
                        image="https://cmscdnus.yinzcam.com/Toolbox/media/CSF_LIB/000_32GA84H.jpg?clxf=w_2000%2ch_2000%2cc_limit%2cf_jpg%2cq_90"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Flamengo es el primer semifinalista de la CONMEBOL Libertadores tras vencer por 1-0 a Corinthians en el Maracaná, con gol de Pedro en el segundo tiempo. El equipo de Río de Janeiro selló la serie con un 3-0 global luego de haber ganado 2-0 en la ida en San Pablo.
                            Flamengo espera rival para ir en buscar de su tercera final en 4 años. Se medirá al ganador de la serie, que este miércoles definirán Vélez y Talleres, luego de la victoria 3-2 del equipo de Liniers en la ida como local.
                            Flamengo, campeón en 2019 y finalista en 2021, jugará su tercera semifinal en los últimos 4 años.
                        </Typography>
                    </CardContent>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon sx={{fontSize: 35}}/>
                        </IconButton>
                </Card>
                {/* CUARTA CARTA */}
            </div>


        </>
    );
}