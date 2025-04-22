import { IonContent, IonHeader, IonImg, IonItem, IonList, IonPage } from "@ionic/react";
import SearchBar from "../components/SearchBar";
import './SearchPage.css';
import plink from "../assets/images/Plink.png";
import SearchItem from "../components/SearchItem";
import { RecipeModel } from "../model/RecipeModel";

const SearchPage: React.FC = () => {

    let recipe1 = new RecipeModel();
    recipe1.setImagemURL("https://via.placeholder.com/150");
    recipe1.setRecipeName("Recipe 1");
    recipe1.setRecipeURL("Recipe-1#1");
    recipe1.setRecipeEcoPoint(3);
    recipe1.setRecipeDescription("This is a description for Recipe 1.");
    recipe1.setRecipeTime(30);
    recipe1.setRecipeDificulty("Easy");
    recipe1.setRecipeCost("Cheap");
    recipe1.setRecipeCategory("Utility");

    let recipe2 = new RecipeModel();
    recipe2.setImagemURL("https://via.placeholder.com/150");
    recipe2.setRecipeName("Recipe 2");
    recipe2.setRecipeURL("Recipe-2#2");
    recipe2.setRecipeEcoPoint(4);
    recipe2.setRecipeDescription("lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    recipe2.setRecipeTime(45);
    recipe2.setRecipeDificulty("Medium");
    recipe2.setRecipeCost("Expensive");
    recipe2.setRecipeCategory("Gardening");

    return (
        <IonPage className="ionPage">
            <IonHeader style={{ height: "60px", backgroundColor:"transparent", display:"flex", flexDirection:"row", padding:"5px"}}>
                <IonImg src={plink} style={{ maxWidth: "50px", marginRight:"5px"}}></IonImg>
                <SearchBar></SearchBar>          
            </IonHeader>
            <IonContent fullscreen>
                <IonList style={{backgroundColor:"transparent"}}>
                    <SearchItem recipe={recipe1}></SearchItem>
                    <SearchItem recipe={recipe2}></SearchItem>
                </IonList>
            </IonContent>
        </IonPage>
    );

};

export default SearchPage;