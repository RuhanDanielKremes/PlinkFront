export class Ingredients {
    private id: number;
    private name: string;
    private type: string;

    constructor() {
            this.id = 0;
            this.name = "";
            this.type = "";
        }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        if (type !== "FERRAMENTA_CASA" && type !== "FERRAMENTA_COMPRA" && type !== "INGREDIENTE") {
            throw new Error("Invalid type. Must be 'FERRAMENTA_CASA', 'FERRAMENTA_COMPRA' or 'INGREDIENTE'.");            
        }
        this.type = type;
    }

    public toJson(): string {
        return JSON.stringify({
            id: this.id,
            name: this.name,
            type: this.type
        });
    }
    
}