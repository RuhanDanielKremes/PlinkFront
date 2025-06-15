import { IonAccordion, IonAccordionGroup, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonTitle } from "@ionic/react";
import { RecipeModel } from "../model/RecipeModel";
import './RecipePage.css';
import { caretDownCircle, cash, flask, leaf, timer } from "ionicons/icons";
import Sidebar from "../components/Sidebar";
import React, { useEffect, useState } from "react";


const RecipePage: React.FC = () => {

    let url = window.location.href;
    let urlParts = url.split('/recipe/');
    let uri = urlParts[1];
    let recipeIdentifier = uri ? uri.split('#')[1] : null;
    
    const [recipe, setRecipe] = useState<RecipeModel | null>(null);

    useEffect(() => {
        if (!recipeIdentifier) return;

        fetch(`http://192.168.0.100:8150/api/system/receitas/${recipeIdentifier}`)
            .then(res => res.json())
            .then(data => {
                console.log("ingredientes:", data.ingredienteSet);
                const r = new RecipeModel();
                r.setRecipeId(data.receitaId);
                r.setRecipeName(data.nome);
                r.setRecipeDescription(data.descricao);
                r.setImagemURL(data.imagemUrl);
                r.setReciclableIngredients(data.ingredienteSet
                    .filter((i: any) => i.tipoIngrediente === 'INGREDIENTE')
                    .map((i: any) => i.nome));
                r.setHomeTools(data.ingredienteSet
                    .filter((i: any) => i.tipoIngrediente === 'FERRAMENTA_CASA')
                    .map((i: any) => i.nome));
                r.setShopTools(data.ingredienteSet
                    .filter((i: any) => i.tipoIngrediente === 'FERRAMENTA_COMPRA')
                    .map((i: any) => i.nome));
                r.setRecipeSteps(data.passoAPasso);
                r.setRecipeTime(data.tempo);
                r.setRecipeEcoPoint(data.pontosEcologicos);
                r.setRecipeCost(data.tipoCusto);
                r.setRecipeDificulty(data.tipoDificuldade);
                r.setRecipeCategory(data.categoria);
                r.setRecipeAuthor(data.autor);

                setRecipe(r);
            })
            .catch(err => {
                console.error("Erro ao carregar receita:", err);
            });
    }, [recipeIdentifier]);

    if (!recipe) return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <IonPage className="ionPage" style={{ marginLeft: '70px' }}>
                <IonContent fullscreen>
                    <p style={{ margin: 'auto', textAlign: 'center', paddingTop: '30%' }}>Carregando receita...</p>
                </IonContent>
            </IonPage>
        </div>
    );


    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <IonPage className="ionPage" style={{ marginLeft: '70px'}}>
                <IonContent fullscreen style={{ backgroundColor: 'transparent' }}>
                    <div id="recipeContentBox" style={{maxWidth:"90%", display:"flex"}}>
                        <IonImg src={recipe.getImagemURL()}></IonImg>
                        <div id="generalRecipeInfo">
                            <IonTitle id="recipeName">{recipe.getRecipeName()}</IonTitle>
                            <IonItem className="recipeDescriptionBlock">{recipe.getRecipeDescription()}</IonItem>
                        </div>
                        <IonItem style={{minWidth: "100%", color:"white", justifyContent:"space-between"}}>
                            <IonItem className="searchItemDetailsBox" lines="none">
                                <IonIcon icon={timer}></IonIcon>
                                <IonLabel>{recipe.getRecipeTime() == 0 ? "Not mensured" : recipe.getRecipeTime()} min</IonLabel>
                            </IonItem>
                            <IonItem className="searchItemDetailsBox" lines="none">
                                <IonIcon icon={flask}></IonIcon>
                                <IonLabel>{recipe.getRecipeDificulty() == "" ? "Not mensured" : recipe.getRecipeDificulty()}</IonLabel>
                            </IonItem>
                            <IonItem className="searchItemDetailsBox" lines="none">
                                <IonIcon icon={cash}></IonIcon>
                                <IonLabel>{recipe.getRecipeCost() == "" ? "Not mensured" : recipe.getRecipeCost()}</IonLabel>
                            </IonItem>
                            <div id="ecoPointsContainer">
                                <IonIcon icon={leaf} style={recipe.getRecipeEcoPoint() >= 1 ? { color: "#28c900" } : {color:"gray"}}></IonIcon>
                                <IonIcon icon={leaf} style={recipe.getRecipeEcoPoint() >= 2 ? { color: "#28c900" } : { color: "gray" }}></IonIcon>
                                <IonIcon icon={leaf} style={recipe.getRecipeEcoPoint() >= 3 ? { color: "#28c900" } : { color: "gray" }}></IonIcon>
                                <IonIcon icon={leaf} style={recipe.getRecipeEcoPoint() >= 4 ? { color: "#28c900" } : { color: "gray" }}></IonIcon>
                                <IonIcon icon={leaf} style={recipe.getRecipeEcoPoint() >= 5 ? { color: "#28c900" } : { color: "gray" }}></IonIcon>
                                <IonLabel>{recipe.getRecipeEcoPoint()}{recipe.getRecipeEcoPoint() <= 1 ? " point" : " POINTS!"}</IonLabel>
                            </div>
                        </IonItem>
                        <div className="recipeConteiners">
                            <IonAccordionGroup value={"reciclableIngredients"}>
                                <IonAccordion toggleIcon={caretDownCircle} className="recipeAccordion" value="reciclableIngredients">
                                    <IonItem slot="header" id="recyclableItemContainer" className="recipeConteinersTitleItem">
                                        <IonLabel className="recipeConteinersTitleLabel">Recicable Ingredients</IonLabel>
                                    </IonItem>
                                    <div slot="content">
                                        {recipe.getReciclableIngredients().map((ingredient, index) => (
                                            <IonItem key={index}>{ingredient}</IonItem>
                                        ))}
                                    </div>    
                                </IonAccordion>
                            </IonAccordionGroup>
                        </div>
                        <div className="recipeConteiners">
                            <IonAccordionGroup value={"homeTools"}>
                                <IonAccordion toggleIcon={caretDownCircle} className="recipeAccordion" value="homeTools">
                                    <IonItem slot="header" id="homeToolsItemContainer" className="recipeConteinersTitleItem">
                                        <IonLabel className="recipeConteinersTitleLabel">Recipe Description</IonLabel>
                                    </IonItem>
                                    <div slot="content">
                                        {recipe.getHomeTools().map((tool, index) => (
                                            <IonItem key={index}>{tool}</IonItem>
                                        ))}
                                    </div>    
                                </IonAccordion>
                            </IonAccordionGroup>
                        </div>
                        <div className="recipeConteiners">
                            <IonAccordionGroup value={"shopTools"}>
                                <IonAccordion toggleIcon={caretDownCircle} className="recipeAccordion" value="shopTools">
                                    <IonItem slot="header" id="shopToolsItemContainer" className="recipeConteinersTitleItem">
                                        <IonLabel className="recipeConteinersTitleLabel">Shop Tools</IonLabel>
                                    </IonItem>
                                    <div slot="content">
                                        {recipe.getShopTools().map((tool, index) => (
                                            <IonItem key={index}>{tool}</IonItem>
                                        ))}
                                    </div>    
                                </IonAccordion>
                            </IonAccordionGroup>
                        </div>
                        <div className="recipeConteiners">
                            <IonAccordionGroup value={"recipeSteps"}>
                                <IonAccordion toggleIcon={caretDownCircle} className="recipeAccordion" value="recipeSteps">
                                    <IonItem slot="header" id="recipeStepsItemContainer" className="recipeConteinersTitleItem">
                                        <IonLabel className="recipeConteinersTitleLabel">Recipe Steps</IonLabel>
                                    </IonItem>
                                    <div slot="content">
                                        {recipe.getRecipeSteps().map((step, index) => (
                                            <IonItem key={index}>{step}</IonItem>
                                        ))}
                                    </div>
                                </IonAccordion>
                            </IonAccordionGroup>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    );

}

export default RecipePage;