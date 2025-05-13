import { HttpConection } from "../components/Json";
import { Receita } from "../model/Receita";

export class ReceitaControler {

    private http;

    public constructor(){
        this.http = new HttpConection('');
        if(sessionStorage.getItem('token') != null){
            HttpConection.setHeader("Authorization", "Bearer " + sessionStorage.getItem('token'));
        }
        HttpConection.setHeader("Content-Type", "application/json");
    }

    public createRecipe(recipe: Receita){
        let json = JSON.stringify(recipe);
        return this.http.sendJson('/receitas','POST',json);
    }

    public getAllRecipes() {
        return this.http.sendJson('/receitas','GET');
    }

    public updateRecipe(recipe: Receita) {
        let json = JSON.stringify(recipe);
        return this.http.sendJson('/receitas','PUT',json);
    }

    public deleteRecipe(recipeId: number) {
        return this.http.sendJson('/receitas/' + recipeId,'DELETE');
    }

}