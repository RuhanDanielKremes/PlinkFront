export class UserModel {

    private usuarioId: number;
    private email: string;
    private login: string;
    private senha: string;
    private nomeCompleto: string;

    constructor() {
        this.usuarioId = 0;
        this.email = "";
        this.login = "";
        this.senha = "";
        this.nomeCompleto = "";
    }

    public getUserId(): number {
        return this.usuarioId;
    }

    public setUserId(userId: number): void {
        this.usuarioId = userId;
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
            usuarioId: this.usuarioId,
            email: this.email,
            login: this.login,
            senha: this.senha,
            nomeCompleto: this.nomeCompleto
        });
    }

}