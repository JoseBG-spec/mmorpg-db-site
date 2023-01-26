import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import axios from "axios";
import { yellow, red } from '@mui/material/colors';

export default function TitlebarBelowImageList() {
  var [gamesInfo,setGamesInfo] = React.useState([])

  React.useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
      params: {tag: '3d.mmorpg.fantasy.pvp', platform: 'pc'},
      headers: {
        'X-RapidAPI-Key': '712ec38d41msh14a2127c802f550p19d732jsn102bddbdde7f',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      //console.log(response.data);
      AddGames(response.data)
    }).catch(function (error) {
      //console.error(error);
    });
  },[])
  function AddGames(info){
    var gamesList = []
    info.map(game => {
      //console.log(game)
      gamesList.push({
        imageSrc: game.thumbnail ? game.thumbnail : "",
        title: game.title ? game.title : "",
        description: game.short_description ? game.short_description : "",
        genre : game.genre ? game.genre : "",
        platform : game.platform ? game.platform : "",
        id : game.id ? game.id : 0,
        game_url : game.game_url ? game.game_url : "",
        releaseDate	: game.release_date ? game.release_date : ""})
    });
    //console.log(gamesListInfo)
    setGamesInfo(gamesList)
    
  }

  return (
    <Box sx={{ display: 'grid', width: '88%', height: '100%', gridTemplateColumns: 'repeat(4,28%)', gap: '25px'}}>
      {gamesInfo.map((game) => (
          <Card sx={{ maxWidth: 345, backgroundColor: '#4d3872', filter: 'drop-shadow(0 0 0.75rem crimson)'}} key={game.id}>
          <CardMedia
            component="img"
            alt={game.title}
            height="200"
            image={game.imageSrc}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" color='common.white'>
              {game.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" style={{color:yellow[600]}}>
              Release date: {game.releaseDate}
            </Typography>
            <Typography variant="body2" color="common.white">
              {game.description}
            </Typography>
          </CardContent>
          <Button size="small" variant='outlined' style={{color:yellow[600],borderColor: yellow[600]}}>{game.platform}</Button>
          <Button size="small" variant='outlined' style={{color:yellow[600],borderColor: yellow[600]}}>{game.genre}</Button>
          <CardActions>

            <Button 
            size="small" variant='outlined' 
            style={{color:red[600],borderColor: red[600]}}
            ><a style={{color:red[600]}} href={game.game_url}>Learn More</a></Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}