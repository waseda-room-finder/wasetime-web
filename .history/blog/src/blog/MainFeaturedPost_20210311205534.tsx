import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CareerArticles from "./CareerArticles";
import { Post } from "../types/post";
import moment from "moment";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    marginBottom: theme.spacing(4),
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  cardMedia: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: 300,
  },
}));

function MainFeaturedPost(props: { post: Post }) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Card
      className={classes.mainFeaturedPost}
      // style={{ backgroundImage: `url(${post.image})` }}
      // style={{
      //   backgroundImage: `url(https://wasedatime-feeds.s3-ap-northeast-1.amazonaws.com/${post.src}cover.jpg)`,
      // }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} alt="main text" />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {moment(post.created_at).format("MMMM Do YYYY")}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.summary}
            </Typography>
            <Link to={`/blog/articles/${post.src}`} style={{ textDecoration: 'none' }}>Continue reading...</Link>
          </div>
        </Grid>
        <CardMedia
        className={classes.cardMedia}
        image={`https://wasedatime-feeds.s3-ap-northeast-1.amazonaws.com/${post.src}cover.jpg`}
        title="Article Cover"
        />
      </Grid>
      {/* <Route path={`/user/${post.src}`} component={CareerArticles} /> */}
    </Card>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
    // imageText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
