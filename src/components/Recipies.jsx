import {Card, CardHeader, Divider, Typography, Grid, Button, Box, CardContent, CardMedia} from '@mui/material'
import { useContext } from 'react'
import { RecipesContext } from '../context/GeneralContext'
import { Link } from 'react-router-dom'

import React from 'react'

function Recipies() {

    const styleHeader = {
        height:50
    }

    const {allRecipes}= useContext(RecipesContext)

  return (
    <Grid container spacing={2} style={styleHeader}>
            {
        allRecipes.map((recipe)=>(
            <Grid item xs={6} md={3}>
                <Card>
                    <CardHeader title = {recipe.recipe.label}/>
                    <Divider/>
                    <CardContent>
                        <CardMedia component='img' image = {recipe.recipe.image}/>
                    </CardContent>
                </Card>
                <Button><Link to = {`/Recipe/${recipe.recipe.label}`}>More</Link></Button>
            </Grid>
        )
        )
    }
    </Grid>
  )
}

export default Recipies