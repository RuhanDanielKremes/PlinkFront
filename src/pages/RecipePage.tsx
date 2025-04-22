import { IonAccordion, IonAccordionGroup, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonTitle } from "@ionic/react";
import { RecipeModel } from "../model/RecipeModel";
import './RecipePage.css';
import { caretDownCircle, cash, flask, leaf, timer } from "ionicons/icons";

const RecipePage: React.FC = () => {

    let url = window.location.href;
    let urlParts = url.split('/recipe/');
    let uri = urlParts[1];
    let recipeIdentifier = uri ? uri.split('#')[1] : null;

    let recipe: RecipeModel;
    recipe = new RecipeModel();
    recipe.setRecipeName("Test Recipe");
    recipe.setRecipeDescription("This is a test recipe.");
    recipe.setReciclableIngredients(["Ingredient 1", "Ingredient 2"]);
    recipe.setHomeTools(["Tool 1", "Tool 2"]);
    recipe.setShopTools(["Tool 3", "Tool 4"]);
    recipe.setRecipeSteps(["Step 1", "Step 2", "Step 3"]);
    recipe.setImagemURL("https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msIoL?w=0&h=0&q=60&m=6&f=jpg&u=t");
    recipe.setRecipeTime(30);
    recipe.setRecipeDificulty("Easy");
    recipe.setRecipeCost("Low");
    recipe.setRecipeEcoPoint(3);

    return (
        <IonPage className="ionPage">
            <IonContent fullscreen style={{ backgroundColor: 'transsparent' }}>
                <div id="recipeContentBox">
                    <IonImg src={recipe.getImagemURL()}></IonImg>
                    <div id="generalRecipeInfo">
                        <IonTitle id="recipeName">{recipe.getRecipeName()}</IonTitle>
                        <IonItem>{recipe.getRecipeDescription()}</IonItem>
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
                <div className="recipe-page">
                    <h1>Recipe Page</h1>
                    <p>This is the recipe page.</p>
                    <p>{recipeIdentifier}</p>
                </div>
            </IonContent>
        </IonPage>
    );

}

export default RecipePage;