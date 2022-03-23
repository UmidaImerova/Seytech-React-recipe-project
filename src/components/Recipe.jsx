import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom' 
import {CardMedia, Grid, Tab} from '@mui/material'
import {TabPanel, TabList, TabContext} from '@mui/lab'
import { useContext } from 'react'
import { RecipesContext } from '../context/GeneralContext'
import Menu from './Menu'

function Recipe() {
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }

    const {recipe} = useParams () 

    const {allRecipes} = useContext(RecipesContext)
    const data = allRecipes.filter((el)=>el.recipe.label === recipe)
    
  return (
    <Grid container spacing={2}>
        <Menu/>
        <Grid item xs={12} md={6}>
            <h1>{recipe}</h1>
            <CardMedia component='img' image={data[0].recipe.image} alt = 'img'/>
        </Grid>
        <Grid item xs={12} md={6}>
            <TabContext value={value}> 
                <TabList onChange={handleChange} aria-lable= "dedescription">
                    <Tab label='Ingridients' value="1"></Tab>
                    <Tab label='Nutritional Value' value="2"></Tab>
                    <Tab label='Something' value="3"></Tab>
                </TabList>
                <TabPanel value='1'>Panel1</TabPanel>
                <TabPanel value='2'>Panel2</TabPanel>
                <TabPanel value='3'>Panel3</TabPanel>
            </TabContext>
        </Grid>
    </Grid>
  )
}

export default Recipe