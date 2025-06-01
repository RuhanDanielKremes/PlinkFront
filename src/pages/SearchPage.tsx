import { IonContent, IonHeader, IonImg, IonItem, IonList, IonPage } from "@ionic/react";
import SearchBar from "../components/SearchBar";
import './SearchPage.css';
import SearchItem from "../components/SearchItem";
import { RecipeModel } from "../model/RecipeModel";
import Sidebar from "../components/Sidebar";
import React, { useEffect, useState } from "react";


const SearchPage: React.FC = () => {
    const [recipes, setRecipes] = useState<RecipeModel[]>([]);
    
    useEffect(() => {
        
        fetch("http://localhost:8150/api/system/receitas", {
            
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        
        
        .then((res) => res.json())
        .then((data) => {
                console.log("Receitas da API:", data);
                const loadedRecipes = data.map((item: any) => {
                    console.log("Receita bruta:", item);
                    const recipe = new RecipeModel();
                    recipe.setImagemURL(item.imagemUrl);
                    recipe.setRecipeName(item.nome);
                    recipe.setRecipeURL(`recipe/${item.nome}#${item.receitaId}`);
                    recipe.setRecipeEcoPoint(item.pontosEcologicos);
                    recipe.setRecipeDescription(item.descricao);
                    recipe.setRecipeTime(item.tempo);
                    recipe.setRecipeDificulty(item.tipoDificuldade);
                    recipe.setRecipeCost(item.tipoCusto);
                    recipe.setRecipeCategory(item.categoria);
                    return recipe;
                });
                setRecipes(loadedRecipes);
            })
            .catch((err) => console.error("Erro ao buscar receitas:", err));
    }, []);

    return (
        <div style={{display: "flex"}}>
        <Sidebar />
        <IonPage className="ionPage" style={{marginLeft: '70px'}}>
            <IonHeader style={{ height: "60px", backgroundColor:"transparent", display:"flex", flexDirection:"row", padding:"5px"}}>
                <SearchBar></SearchBar>          
            </IonHeader>
            <IonContent fullscreen>
                <IonList style={{backgroundColor:"transparent"}}>
                    {recipes.map((recipe, index) => (
                        
                        <SearchItem key={index} recipe={recipe} />
                    ))}

                </IonList>
            </IonContent>
        </IonPage>
        </div>
    );

};

export default SearchPage;