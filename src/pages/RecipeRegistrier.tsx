import { IonButton, IonChip, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react";
import { Ingredients } from "../model/Ingredients";
import { add, close } from "ionicons/icons";
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import { Receita } from "../model/Receita";
import { ReceitaControler } from "../controlers/ReceitaControler";
import { IngredienteSet } from "../model/IngredienteSet";


const RecipeRegistrierPage: React.FC = () => {

    const [recicableIngredients, setRecicableIngredients] = useState<Ingredients[]>([]);
    const [homeTools, setHomeTools] = useState<Ingredients[]>([]);
    const [boughtTools, setBoughtTools] = useState<Ingredients[]>([]);

    const [recipeSteps, setRecipeSteps] = useState<string[]>([]);

    function addRecicableIngredients() {
        const recicableItemInput = document.getElementById("recicableItemInput") as HTMLInputElement;

        if (recicableItemInput !== undefined) {
            if(recicableItemInput.value !== "") {
                let recicableIngredient = new Ingredients();
                recicableIngredient.setName(recicableItemInput.value);
                recicableIngredient.setType("INGREDIENTE");
                setRecicableIngredients([...recicableIngredients, recicableIngredient]);
                recicableItemInput.value = "";
            }
        }
    }

    function removeRecicableIngredients(index: number) {
        const newRecicableIngredients = [...recicableIngredients];
        newRecicableIngredients.splice(index, 1);
        setRecicableIngredients(newRecicableIngredients);
    }

    function addHomeTools() {
        const homeToolInput = document.getElementById("homeToolInput") as HTMLInputElement;

        if (homeToolInput !== undefined) {
            if(homeToolInput.value !== "") {
                let homeTool = new Ingredients();
                homeTool.setName(homeToolInput.value);
                homeTool.setType("FERRAMENTA_CASA");
                setHomeTools([...homeTools, homeTool]);
                homeToolInput.value = "";
            }
        }
    }

    function removeHomeTools(index: number) {
        const newHomeTools = [...homeTools];
        newHomeTools.splice(index, 1);
        setHomeTools(newHomeTools);
    }

    function addBoughtTools() {
        const boughtToolInput = document.getElementById("boughtToolInput") as HTMLInputElement;

        if (boughtToolInput !== undefined) {
            if(boughtToolInput.value !== "") {
                let boughtTool = new Ingredients();
                boughtTool.setName(boughtToolInput.value);
                boughtTool.setType("FERRAMENTA_COMPRA");
                setBoughtTools([...boughtTools, boughtTool]);
                boughtToolInput.value = "";
            }
        }
    }

    function removeBoughtTools(index: number) {
        const newBoughtTools = [...boughtTools];
        newBoughtTools.splice(index, 1);
        setBoughtTools(newBoughtTools);
    }

    function addRecipeStep() {
        const recipeStepInput = document.getElementById("recipeStepInput") as HTMLInputElement;

        if (recipeStepInput !== undefined) {
            if(recipeStepInput.value !== "") {
                setRecipeSteps([...recipeSteps, recipeStepInput.value]);
                recipeStepInput.value = "";
            }
        }
    }

    function removeRecipeStep(index: number) {
        const newRecipeSteps = [...recipeSteps];
        newRecipeSteps.splice(index, 1);
        setRecipeSteps(newRecipeSteps);
    }

    function sendRecipe() {
        let recipe: Receita = new Receita();
        try {
            // console.log((document.getElementById("recipeDificultyInput") as HTMLIonSelectElement).value);
            recipe.setNome((document.getElementById("recipeNameInput") as HTMLInputElement).value);
            recipe.setDescricao((document.getElementById("recipeDescriptionInput") as HTMLInputElement).value);
            recipe.setImagemURL((document.getElementById("recipeImageUrlInput") as HTMLInputElement).value);
            recipe.setTempo(parseInt((document.getElementById("recipePrepareTimeInput") as HTMLInputElement).value));
            recipe.setPontosEcologicos(parseInt((document.getElementById("recipeEcologicalPointsInput") as HTMLInputElement).value));
            recipe.setCusto(parseInt((document.getElementById("recipeEcologicalPointsInput") as HTMLInputElement).value));
            recipe.setTipoDificuldade((document.getElementById("recipeDificultyInput") as HTMLIonSelectElement).value);
            recipe.setTipoCusto((document.getElementById("recipeCostInput") as HTMLInputElement).value);
            recipe.setCategoria((document.getElementById("recipeCategoryInput") as HTMLInputElement).value);
            recipe.setPassoAPasso(recipeSteps);
            recipe.setAutor((document.getElementById("recipeAuthorInput") as HTMLInputElement).value);
            
        } catch (error) {
            console.error("Error setting recipe properties: ", error);
        }
        
        let ingredientsList: IngredienteSet[] = [];

        // ingredientsList = [...recicableIngredients, ...homeTools, ...boughtTools];

        if (recicableIngredients.length > 0) {
            for (let i = 0; i < recicableIngredients.length; i++) {
                let ingredientSet = new IngredienteSet();
                ingredientSet.setNome(recicableIngredients[i].getName());
                ingredientSet.setTipoIngrediente(recicableIngredients[i].getType());
                ingredientsList.push(ingredientSet);
            }
        }

        if (homeTools.length > 0) {
            for (let i = 0; i < homeTools.length; i++) {
                let ingredientSet = new IngredienteSet();
                ingredientSet.setNome(homeTools[i].getName());
                ingredientSet.setTipoIngrediente(homeTools[i].getType());
                ingredientsList.push(ingredientSet);
            }
        }

        if (boughtTools.length > 0) {
            for (let i = 0; i < boughtTools.length; i++) {
                let ingredientSet = new IngredienteSet();
                ingredientSet.setNome(boughtTools[i].getName());
                ingredientSet.setTipoIngrediente(boughtTools[i].getType());
                ingredientsList.push(ingredientSet);
            }
        }

        recipe.setIngredienteSet(ingredientsList);
        
        console.log(recipe);
        
        let recipeControler = new ReceitaControler();

        recipeControler.createRecipe(recipe).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <IonPage>
            <IonContent>
                {/* <div style={{display:"flex", width:"100%", backgroundColor:"lightcoral"}}>ALELEK</div> */}
                <div id="recipeRegisterContainer">
                    <IonItem>
                        <IonLabel>Recipe Name</IonLabel>
                        <IonInput id="recipeNameInput"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Recipe Description</IonLabel>
                        <IonTextarea id="recipeDescriptionInput"></IonTextarea>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Recicable Itens</IonLabel>
                        <IonInput id="recicableItemInput"></IonInput>
                        <IonButton onClick={addRecicableIngredients}>
                            <IonLabel>ADD</IonLabel>
                            <IonIcon icon={add} slot="icon-only"></IonIcon>
                        </IonButton>
                        <IonItem>
                            {recicableIngredients.map((ingredient, index) => (
                                <IonChip key={index}>
                                    <IonLabel>{ingredient.getName()}</IonLabel>
                                    <IonIcon icon={close} onClick={() => removeRecicableIngredients(index)}></IonIcon>
                                </IonChip>
                            ))}
                        </IonItem>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Home Tools</IonLabel>
                        <IonInput id="homeToolInput"></IonInput>
                        <IonButton onClick={addHomeTools}>
                            <IonLabel>ADD</IonLabel>
                            <IonIcon icon={add} slot="icon-only"></IonIcon>
                        </IonButton>
                        <IonItem>
                            {homeTools.map((ingredient, index) => (
                                <IonChip key={index}>
                                    <IonLabel>{ingredient.getName()}</IonLabel>
                                    <IonIcon icon={close} onClick={() => removeHomeTools(index)}></IonIcon>
                                </IonChip>
                            ))}
                        </IonItem>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Bought Tools</IonLabel>
                        <IonInput id="boughtToolInput"></IonInput>
                        <IonButton onClick={addBoughtTools}>
                            <IonLabel>ADD</IonLabel>
                            <IonIcon icon={add} slot="icon-only"></IonIcon>
                        </IonButton>
                        <IonItem>
                            {boughtTools.map((ingredient, index) => (
                                <IonChip key={index}>
                                    <IonLabel>{ingredient.getName()}</IonLabel>
                                    <IonIcon icon={close} onClick={() => removeBoughtTools(index)}></IonIcon>
                                </IonChip>
                            ))}
                        </IonItem>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Steps</IonLabel>
                        <IonInput id="recipeStepInput"></IonInput>
                        <IonButton onClick={addRecipeStep}>
                            <IonLabel>ADD</IonLabel>
                            <IonIcon icon={add} slot="icon-only"></IonIcon>
                        </IonButton>
                        <IonItem>
                            {recipeSteps.map((step, index) => (
                                <div key={index} style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                                    <IonLabel>{ (index+1) +" " + step}</IonLabel>
                                    <IonIcon icon={close} onClick={() => removeRecipeStep(index)}></IonIcon>
                                </div>
                            ))}
                        </IonItem>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Prepare time</IonLabel>
                        <IonInput id="recipePrepareTimeInput" type="number"></IonInput>
                        <IonLabel>Minutes</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonSelect label="Select Difficulty" interface="popover" id="recipeDificultyInput">
                            <IonSelectOption value="FACIL">Easy</IonSelectOption>
                            <IonSelectOption value="MODERADO">Medium</IonSelectOption>
                            <IonSelectOption value="DIFICIL">Hard</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonSelect label="Select Cost" interface="popover" id="recipeCostInput">
                            <IonSelectOption value="BARATO">no price</IonSelectOption>
                            <IonSelectOption value="ECONOMICO">Cheap</IonSelectOption>
                            <IonSelectOption value="RAZOAVEL">Medium</IonSelectOption>
                            <IonSelectOption value="CARO">Expensive</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonSelect label="Category" id="recipeCategoryInput" interface="popover">
                            <IonSelectOption value="JARDINAGEM">gardening</IonSelectOption>
                            <IonSelectOption value="UTILIDADE">utility</IonSelectOption>
                            <IonSelectOption value="DECORACAO">decoration</IonSelectOption>
                            <IonSelectOption value="BRINQUEDO">toy</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Image URL</IonLabel>
                        <IonInput id="recipeImageUrlInput"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Ecological Points</IonLabel>
                        <IonInput id="recipeEcologicalPointsInput" type="number"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Cost</IonLabel>
                        <InputNumber mode="currency" currency="BRL" locale="pt-BR"></InputNumber>
                        <IonLabel>Cost Type</IonLabel>
                        <IonSelect interface="popover" id="recipeCostInput">
                            <IonSelectOption value="ECONOMICO">Economic</IonSelectOption>
                            <IonSelectOption value="BARATO">Cheap</IonSelectOption>
                            <IonSelectOption value="RAZOAVEL">Medium</IonSelectOption>
                            <IonSelectOption value="CARO">Expensive</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Author</IonLabel>
                        <IonInput id="recipeAuthorInput"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full" color="danger">
                            <IonLabel>Cancel</IonLabel>
                        </IonButton>
                        <IonButton expand="full" color="success" onClick={sendRecipe}>
                            <IonLabel>Register Recipe</IonLabel>
                        </IonButton>
                    </IonItem>
                </div>
            </IonContent>
        </IonPage>  
    );

}

export default RecipeRegistrierPage;