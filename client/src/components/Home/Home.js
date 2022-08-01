import React from 'react'
import { Container,Grid,Grow } from '@material-ui/core';
import Posts from "../Posts/Posts";
import Form from "../Form/Form"
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPosts } from '../../actions/posts';
import useStyles from "./styles"

const Home = () => {
    const [currentId,setCurrentId] = useState(null)
    const dispatch=useDispatch();
    const classes=useStyles();

    useEffect(()=>{
        dispatch(getPosts())
    }, [currentId,dispatch])
  return (
    <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
  )
}

export default Home