import { createContext,usrState, useEffect, useState } from "react";
import axios from "axios";
import { alertClasses } from "@mui/material";


export const RecipesContext = createContext([]);

export const GeneralProvider = ({children})=>{
    const [allRecipes,SetAllRecipes] = useState([]);
    const [recipeToSearch, SetRecipeToSearch] = useState('chicken')

    const CallToAPI = async ()=>{
        const req = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeToSearch}&app_id=74247433&app_key=9ae9e6a0f6b496267af27fa5119bdaac`)
        SetAllRecipes(req.data.hits)
    }
    useEffect(()=>{
        CallToAPI()
    },[recipeToSearch])



    const data = {
        allRecipes:allRecipes,
        recipeToSearch:recipeToSearch,
        SetRecipeToSearch:SetRecipeToSearch
    }
    return(
        <RecipesContext.Provider value = {data}>
         {children}
        </RecipesContext.Provider>
    )
};