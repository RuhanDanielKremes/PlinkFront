export class IngredienteSet{

    private ingredienteId: number;
    private nome: string;
    private tipoIngrediente: string;

    constructor() {
        this.ingredienteId = 0;
        this.nome = "";
        this.tipoIngrediente = "";
    }

    public getIngredienteId(): number {
        return this.ingredienteId;
    }

    public setIngredienteId(ingredienteId: number): void {
        this.ingredienteId = ingredienteId;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getTipoIngrediente(): string {
        return this.tipoIngrediente;
    }

    public setTipoIngrediente(tipoIngrediente: string): void {
        if (tipoIngrediente !== "FERRAMENTA_CASA" && tipoIngrediente !== "FERRAMENTA_COMPRA" && tipoIngrediente !== "INGREDIENTE") {
            throw new Error("Invalid type. Must be 'FERRAMENTA_CASA', 'FERRAMENTA_COMPRA' or 'INGREDIENTE'.");            
        }
        this.tipoIngrediente = tipoIngrediente;
    }

}