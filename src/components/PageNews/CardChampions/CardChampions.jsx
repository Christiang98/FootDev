import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import champions from "../../../assets/img/champions.png"
import Logo from "../../../assets/img/Logo.png"
import "./CardChampions.css";


export default function CardChampions() {
  const [fav, setFav] = useState("false")
  const [fav2, setFav2] = useState("false")
  const [fav3, setFav3] = useState("false")
  const [fav4, setFav4] = useState("false")

  const iconFav = () => {
    setFav((prev) => !prev)

  }
  const iconFav2 = () => {
    setFav2((prev) => !prev)

  }
  const iconFav3 = () => {
    setFav3((prev) => !prev)

  }
  const iconFav4 = () => {
    setFav4((prev) => !prev)

  }
  

  

  return (
    <>
      <h1 className='titleCardsNews'>Ultimas noticias</h1>
      <div className='titleSection'>
        <img className='iconChampions' src={champions} />
        <h3 className='sectionChampions'>Champions League</h3>
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
            title="La Champions League más cara!"
            subheader="5 de Agosto de 2022"
          />
          <CardMedia
            component="img"
            height="260"
            image="https://img.asmedia.epimg.net/resizer/ARf9txUYhzgyWhxnn-PwiBawrz0=/736x414/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/U2GF23DXQJYOPXRYBBZRQZU264.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="black">
              El mercado de pases europeo presentó ya el traspaso de increíbles figuras
              a nivel mundial y en esta ocasión podrás ver a los 5 fichajes más caros hasta el momento
              Haaland, Lewandowski, Koundé, Darwin, Tchouameni....
              los grandes del viejo continente se refuerzan con fichajes millonarios
              en la lucha por conquistar la próxima Champions.
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites" onClick={iconFav}>
            <FavoriteIcon sx={{ marginTop: 16, fontSize: 35, }} color={fav ? "default" : "error"} />
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
            title=" Habra VAR en la tercera ronda"
            subheader="29 de Julio de 2022"
          />
          <CardMedia
            component="img"
            height="260"
            image="https://editorial.uefa.com/resources/0277-15bd55398d5c-e3c572704173-1000/format/wide1/uefa_champions_league_2022_23_preliminary_round_draw.jpeg?imwidth=2048"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="black">
              El árbitro asistente de vídeo (VAR) se utilizará en los próximos partidos de la tercera ronda de clasificación de la UEFA Champions League, siendo la primera vez que se implementa esta tecnología en una fase no centralizada de una competición de la UEFA.
              La UEFA trabaja estrechamente con los clubes y los respectivos operadores al cargo de la producción televisiva para ofrecer la configuración del VAR. Cada equipo de árbitros asistentes de vídeo designado estará también en la sede en una sala de operaciones de vídeo específica.
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites" onClick={iconFav2}>
            <FavoriteIcon sx={{ marginTop: 6, fontSize: 35 }} color={fav2 ? "default" : "error"}/>
          </IconButton>
        </Card>
        {/* SECOND CARD */}

        {/* THIRD CARD */}
        <Card sx={{ maxWidth: 370, maxHeight: 800 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                <img src={Logo} className="logocard" />
              </Avatar>
            }
            title="La Champions League tiene nuevo formato"
            subheader="10 de Mayo de 2022"
          />
          <CardMedia
            component="img"
            height="260"
            image="https://tn.com.ar/resizer/gGv7AVSBbG867WMrEd2DeVXinxc=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/DUZBIHF2OJDYVJU6CWMEXUN53Y.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="black">
              La reforma implica que el certamen contará con 36 equipos participantes, en lugar de los 32 que compiten actualmente. La primera fase será un minicampeonato -una suerte de “liga” con todos los clubes- en el que cada participante disputará ocho partidos (hoy son seis) contra 8 rivales diferentes, cuatro de local y cuatro de visitante. Aún no se informó cómo se definirán los cruces.
              Habrá una única tabla de posiciones. Los ochos primeros equipos al término de la primera fase se clasificarán a octavos de final, mientras que los que ocupen los puestos del 9 al 24 pasarán por un repechaje con el formato de eliminatoria con partidos de ida y vuelta.
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites" onClick={iconFav3}>
            <FavoriteIcon sx={{ marginTop: 1, fontSize: 35 }}  color={fav3 ? "default" : "error"}/>
          </IconButton>
        </Card>
        {/* THIRD CARD */}
        {/* CUARTA CARTA */}
        <Card sx={{ maxWidth: 370, maxHeight: 800 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                <img src={Logo} className="logocard" />
              </Avatar>
            }
            title="Fuera de juego semiautomatico"
            subheader="4 de Agosto de 2022"
          />
          <CardMedia
            component="img"
            height="260"
            image="https://www.filo.news/__export/1659633730874/sites/claro/img/2022/08/04/var_1.jpg_1956802537.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="black">
              a UEFA anunció que el fuera de juego semiautomático se utilizará el 10 de agosto en la Supercopa y en la fase de grupos de la Champions League. De esta manera, servirá como una prueba para lo que será el Mundial de Qatar 2022, en el cual se busca implementar esta tecnología.
              En ese sentido, el partido entre Real Madrid y Eintracht Frankfurt, campeones de Europa, marcará el debut de esta herramienta tecnológica destinada a acelerar y fiabilizar las decisiones arbitrales.
              La tecnología, según NA, permite establecer en todo momento la posición de los jugadores y del balón, facilitando la detención de las jugadas en fuera de juego, sin reemplazar la apreciación de los árbitros.
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites" onClick={iconFav4}>
            <FavoriteIcon sx={{ marginBottom: 1, fontSize: 35 }}  color={fav4 ? "default" : "error"}/>
          </IconButton>
        </Card>
        {/* CUARTA CARTA */}
      </div>
    </>
  );
}