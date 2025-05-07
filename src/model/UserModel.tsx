export class UserModel {

    private userId: number;
    private email: string;
    private login: string;
    private senha: string;
    private nomeCompleto: string;

    constructor() {
        this.userId = 0;
        this.email = "";
        this.login = "";
        this.senha = "";
        this.nomeCompleto = "";
    }

    public getUserId(): number {
        return this.userId;
    }

    public setUserId(userId: number): void {
        this.userId = userId;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getLogin(): string {
        return this.login;
    }

    public setLogin(login: string): void {
        this.login = login;
    }

    public getSenha(): string {
        return this.senha;
    }

    public setSenha(senha: string): void {
        this.senha = senha;
    }

    public getNomeCompleto(): string {
        return this.nomeCompleto;
    }

    public setNomeCompleto(nomeCompleto: string): void {
        this.nomeCompleto = nomeCompleto;
    }

    public toJson(): string {
        return JSON.stringify({
            userId: this.userId,
            email: this.email,
            login: this.login,
            senha: this.senha,
            nomeCompleto: this.nomeCompleto
        });
    }

}