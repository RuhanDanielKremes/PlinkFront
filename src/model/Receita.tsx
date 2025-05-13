import { IngredienteSet } from "./IngredienteSet";
import { Ingredients } from "./Ingredients";

export class Receita { 
    private receitaId: number;
    private nome: string;
    private descricao: string;
    private imagemURL: string;
    private ingredienteSet: IngredienteSet[];
    private passoAPasso: string[];
    private tempo: number;
    private tipoDificuldade: string;
    private pontosEcologicos: number;
    private tipoCusto: string;
    private custo: number;
    private categoria: string;
    private autor: string;
    private dataHoraCriacao: Date;

    constructor() {
        this.receitaId = 0;
        this.nome = "";
        this.descricao = "";
        this.imagemURL = "";
        this.ingredienteSet = [];
        this.passoAPasso = [];
        this.tempo = 0;
        this.tipoDificuldade = "";
        this.pontosEcologicos = 0;
        this.tipoCusto = "";
        this.custo = 0;
        this.categoria = "";
        this.autor = "";
        this.dataHoraCriacao = new Date();
    }

    public getReceitaId(): number {
        return this.receitaId;
    }

    public setReceitaId(receitaId: number): void {
        this.receitaId = receitaId;
    }
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getImagemURL(): string {
        return this.imagemURL;
    }

    public setImagemURL(imagemURL: string): void {
        this.imagemURL = imagemURL;
    }

    public getIngredienteSet(): IngredienteSet[] {
        return this.ingredienteSet;
    }

    public setIngredienteSet(ingredienteSet: IngredienteSet[]): void {
        this.ingredienteSet = ingredienteSet;
    }

    public getPassoAPasso(): string[] {
        return this.passoAPasso;
    }

    public setPassoAPasso(passoAPasso: string[]): void {
        this.passoAPasso = passoAPasso;
    }

    public getTempo(): number {
        return this.tempo;
    }

    public setTempo(tempo: number): void {
        this.tempo = tempo;
    }

    public getTipoDificuldade(): string {
        return this.tipoDificuldade;
    }

    public setTipoDificuldade(tipoDificuldade: string): void {
        this.tipoDificuldade = tipoDificuldade;
    }

    public getPontosEcologicos(): number {
        return this.pontosEcologicos;
    }

    public setPontosEcologicos(pontosEcológicos: number): void {
        this.pontosEcologicos = pontosEcológicos;
    }

    public getTipoCusto(): string {
        return this.tipoCusto;
    }

    public setTipoCusto(tipoCusto: string): void {
        this.tipoCusto = tipoCusto;
    }

    public getCusto(): number {
        return this.custo;
    }

    public setCusto(custo: number): void {
        this.custo = custo;
    }

    public getCategoria(): string {
        return this.categoria;
    }

    public setCategoria(categoria: string): void {
        this.categoria = categoria;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    // public getDataHoraCriacao(): string {
    //     return this.dataHoraCriacao;
    // }

    // public setDataHoraCriacao(dataHoraCriacao: string): void {
    //     this.dataHoraCriacao = dataHoraCriacao;
    // }

    public toJson(): string {
        return JSON.stringify({
            receitaId: this.receitaId,
            nome: this.nome,
            descricao: this.descricao,
            imagemURL: this.imagemURL,
            ingredienteSet: this.ingredienteSet,
            passoAPasso: this.passoAPasso,
            tempo: this.tempo,
            tipoDificuldade: this.tipoDificuldade,
            pontosEcológicos: this.pontosEcologicos,
            tipoCusto: this.tipoCusto,
            custo: this.custo,
            categoria: this.categoria,
            autor: this.autor,
            dataHoraCriacao: this.dataHoraCriacao
        });
    }

}