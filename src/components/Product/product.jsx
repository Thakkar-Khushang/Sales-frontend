import Grid from '@material-ui/core/Grid';
import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
      },
  }));

const Product = ({props}) => {
 console.log(props)
  const classes = useStyles();
  
  if(props){
      return(
    <Grid container spacing={3}>
    {props.map((prop)=>{
        console.log(prop)
    return (
    
        <Grid item xs={6} sm={3} style={{marginTop:"1rem"}}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={prop.images[0]}
                    title={prop.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {prop.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        {prop.filter}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="black">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>)})}
    </Grid>)}
  else{
      return
  }
  }

  export default Product