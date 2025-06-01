import { IonIcon, IonImg, IonItem, IonLabel, IonTitle } from "@ionic/react";
import { RecipeModel } from "../model/RecipeModel";
import './SearchItem.css';
import { useHistory } from "react-router-dom";
import { cash, flask, leaf, navigate, timer } from "ionicons/icons";

interface SearchItemProps {
    recipe : RecipeModel;
}
const SearchItem: React.FC<SearchItemProps> = ({ recipe }) => {
    const history = useHistory();

    return (
        <>
            <IonItem id="searchItemBox" lines="none" onClick={() => history.push(recipe.getRecipeURL())} style={recipe.getRecipeCategory() == "UTILIDADE" ?
                { borderLeftWidth: "30px", borderLeftStyle: "solid", borderColor: "#007aff" } : recipe.getRecipeCategory() == "JARDINAGEM" ?
                { borderLeftWidth: "30px", borderLeftStyle: "solid", borderColor: "#28c900" } : recipe.getRecipeCategory() == "BRINQUEDO" ?
                { borderLeftWidth: "30px", borderLeftStyle: "solid", borderColor: "#ff3d00" } :
                { borderLeftWidth: "30px", borderLeftStyle: "solid", borderColor: "#ffcc00" }}>
                <IonImg src={recipe.getImagemURL() || "https://via.placeholder.com/150"} id="searchItemImage" />
                <div id="searchItemContent">
                    <IonTitle>{recipe.getRecipeName() == "" ? "RECIPE NAME" : recipe.getRecipeName()}</IonTitle>
                    <div id="ecoPointsContainer">
                        <IonIcon icon={leaf} style={recipe.getRecipeEcoPoint() >= 1 ? { color: "#28c900" } : {color:"gray"}}></IonIcon>
                        <IonIcon icon={leaf} style={recipe.getRecipeEcoPoint() >= 2 ? { color: "#28c900" } : { color: "gray" }}></IonIcon>
                        <IonIcon icon={leaf} style={recipe.getRecipeEcoPoint() >= 3 ? { color: "#28c900" } : { color: "gray" }}></IonIcon>
                        <IonIcon icon={leaf} style={recipe.getRecipeEcoPoint() >= 4 ? { color: "#28c900" } : { color: "gray" }}></IonIcon>
                        <IonIcon icon={leaf} style={recipe.getRecipeEcoPoint() >= 5 ? { color: "#28c900" } : { color: "gray" }}></IonIcon>
                    </div>
                    <IonLabel id="searchItemDescription">{recipe.getRecipeDescription() == "" ? "Item description goes here. This is a placeholder text." : recipe.getRecipeDescription()}</IonLabel>
                    <div id="searchItemDetails">
                        <IonItem className="searchItemDetailsBox" lines="none">
                            <IonIcon icon={timer}></IonIcon>
                            <IonLabel>{recipe.getRecipeTime() > 0 ? `${recipe.getRecipeTime()} min` : "Tempo indefinido"}</IonLabel>
                        </IonItem>
                        <IonItem className="searchItemDetailsBox" lines="none">
                            <IonIcon icon={flask}></IonIcon>
                            <IonLabel>{recipe.getRecipeDificulty() == "" ? "Not mensured" : recipe.getRecipeDificulty()}</IonLabel>
                        </IonItem>
                        <IonItem className="searchItemDetailsBox" lines="none">
                            <IonIcon icon={cash}></IonIcon>
                            <IonLabel>{recipe.getRecipeCost() == "" ? "Not mensured" : recipe.getRecipeCost()}</IonLabel>
                        </IonItem>
                    </div>
                </div>
            </IonItem>
        </>
    );

}

export default SearchItem;