import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import './home.css'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
      },
  }));

const Home = () => {
    const classes = useStyles();

    return (
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <Grid container spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
                <Grid item xs={12}>
                    <Paper elevation={2} style={{marginTop:"1rem", backgroundColor:"rgba(0,0,0,0.01)"}}>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <h1 id="Featured" style={{padding:"0", margin:"0", paddingTop:"10px", alignItems:"center"}}>Featured Products</h1>
                        </div>
                        <hr class="style-seven"/>
                        <div>
                            <Carousel width="100vw" showThumbs={false} interval={5000} showStatus={false} onSwipeMove autoPlay autoFocus swipeable emulateTouch infiniteLoop stopOnHover>
                                <div>
                                    <img id="carousel" alt="" src='https://images.unsplash.com/photo-1619231399375-8690e510e599?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80' />
                                    <p id="legend" className="legend">Legend 1</p>
                                </div>
                                <div>
                                <img id="carousel" alt="" src='https://images.unsplash.com/photo-1619231399375-8690e510e599?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80' />
                                    <p id="legend" className="legend">Legend 2</p>
                                </div>
                                <div>
                                <img id="carousel" alt="" src='https://images.unsplash.com/photo-1619231399375-8690e510e599?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80' />
                                    <p id="legend" className="legend">Legend 3</p>
                                </div>
                            </Carousel>
                        </div>
                    </Paper>
                </Grid></Grid>
                <Paper elevation={2} style={{backgroundColor:"rgba(0,0,0,0.01)"}}>
                <Grid item xs={12} style={{display:"flex",justifyContent:"center",backgroundColor:"Orange",color:"black",alignItems:"Center",boxShadow:"0px 0px 4px"}}>
                    <h1 style={{ padding:"10px", margin:"0"}} id="Categories">Categories</h1>
                </Grid>
                <div id="MainSection">
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                    <Link style={{textDecoration:"none"}} to={`/filter/?f=Furniture`}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Furniture
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="black">
                            Learn More
                            </Button>
                        </CardActions>
                        </Card>
                        </Link>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <Link style={{textDecoration:"none"}} to={`/filter/?f=Electronics`}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Electronics
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="black">
                            Learn More
                            </Button>
                        </CardActions>
                        </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Link style={{textDecoration:"none"}} to={`/filter/?f=Clothing`}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Clothing
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="black">
                            Learn More
                            </Button>
                        </CardActions>
                        </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Link style={{textDecoration:"none"}} to={`/filter/?f=Tools`}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Tools
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="black">
                            Learn More
                            </Button>
                        </CardActions>
                        </Card>
                        </Link>
                    </Grid>
                </Grid>
            </div>
            </Paper>
        </div>
    )
}

export default Home