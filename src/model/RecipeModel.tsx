export class RecipeModel{

    private recipeId: string;
    private recipeURL: string;
    private recipeName: string;
    private recipeDescription: string;
    private imagemURL: string;
    private imagemID: string;
    private reciclableIngredients: string[];
    private homeTools: string[];
    private shopTools: string[];
    private recipeSteps: string[];
    private recipeTime: number;
    private recipeDificulty: string;
    private recipeEcoPoint: number;
    private recipeCost: string;
    private recipeCostValue: number;
    private recipeCategory: string;
    private recipeAuthor: string;
    
    public constructor() {
        this.recipeId = "";
        this.recipeName = "";
        this.recipeURL = "";
        this.recipeDescription = "";
        this.imagemURL = "";
        this.imagemID = "";
        this.reciclableIngredients = [];
        this.homeTools = [];
        this.shopTools = [];
        this.recipeSteps = [];
        this.recipeTime = 0;
        this.recipeDificulty = "";
        this.recipeEcoPoint = 0;
        this.recipeCost = "";
        this.recipeCostValue = 0;
        this.recipeCategory = "";
        this.recipeAuthor = "";
    }

    public getRecipeId(): string {
        return this.recipeId;
    }

    public setRecipeId(recipeId: string): void {
        this.recipeId = recipeId;
    }

    public getRecipeName(): string {
        return this.recipeName;
    }

    public setRecipeName(recipeName: string): void {
        this.recipeName = recipeName;
    }

    public getRecipeURL(): string {
        return this.recipeURL;
    }

    public setRecipeURL(recipeURL: string): void {
        this.recipeURL = recipeURL;
    }

    public getRecipeDescription(): string {
        return this.recipeDescription;
    }

    public setRecipeDescription(recipeDescription: string): void {
        this.recipeDescription = recipeDescription;
    }

    public getImagemURL(): string {
        return this.imagemURL;
    }

    public setImagemURL(imagemURL: string): void {
        this.imagemURL = imagemURL;
    }

    public getImagemID(): string {
        return this.imagemID;
    }

    public setImagemID(imagemID: string): void {
        this.imagemID = imagemID;
    }

    public getReciclableIngredients(): string[] {
        return this.reciclableIngredients;
    }

    public setReciclableIngredients(reciclableIngredients: string[]): void {
        this.reciclableIngredients = reciclableIngredients;
    }

    public getHomeTools(): string[] {
        return this.homeTools;
    }

    public setHomeTools(homeTools: string[]): void {
        this.homeTools = homeTools;
    }

    public getShopTools(): string[] {
        return this.shopTools;
    }

    public setShopTools(shopTools: string[]): void {
        this.shopTools = shopTools;
    }

    public getRecipeSteps(): string[] {
        return this.recipeSteps;
    }

    public setRecipeSteps(recipeSteps: string[]): void {
        this.recipeSteps = recipeSteps;
    }

    public getRecipeTime(): number {
        return this.recipeTime;
    }
    public setRecipeTime(recipeTime: number): void {    
        this.recipeTime = recipeTime;
    }

    public getRecipeDificulty(): string {
        return this.recipeDificulty;
    }

    public setRecipeDificulty(recipeDificulty: string): void {
        this.recipeDificulty = recipeDificulty;
    }

    public getRecipeEcoPoint(): number {
        return this.recipeEcoPoint;
    }

    public setRecipeEcoPoint(recipeEcoPoint: number): void {
        this.recipeEcoPoint = recipeEcoPoint;
    }

    public getRecipeCost(): string {
        return this.recipeCost;
    }

    public setRecipeCost(recipeCost: string): void {
        this.recipeCost = recipeCost;
    }

    public getRecipeCostValue(): number {
        return this.recipeCostValue;
    }

    public setRecipeCostValue(recipeCostValue: number): void {
        this.recipeCostValue = recipeCostValue;
    }

    public getRecipeCategory(): string {
        return this.recipeCategory;
    }

    public setRecipeCategory(recipeCategory: string): void {
        this.recipeCategory = recipeCategory;
    }

    public getRecipeAuthor(): string {
        return this.recipeAuthor;
    }

    public setRecipeAuthor(recipeAuthor: string): void {
        this.recipeAuthor = recipeAuthor;
    }

    public toString(): string {
        return `RecipeModel { recipeId: ${this.recipeId}, recipeName: ${this.recipeName}, recipeDescription: ${this.recipeDescription}, imagemURL: ${this.imagemURL}, imagemID: ${this.imagemID}, reciclableIngredients: ${this.reciclableIngredients}, homeTools: ${this.homeTools}, shopTools: ${this.shopTools}, recipeSteps: ${this.recipeSteps}, recipeTime: ${this.recipeTime}, recipeDificulty: ${this.recipeDificulty}, recipeEcoPoint: ${this.recipeEcoPoint}, recipeCost: ${this.recipeCost}, recipeCategory: ${this.recipeCategory}, recipeAuthor: ${this.recipeAuthor} }`;
    }

} 