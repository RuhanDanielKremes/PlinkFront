import { HttpConection } from "../components/Json";
import { UserModel } from "../model/UserModel";

export class LoginControler {

    private http;
    
    public constructor(){
        this.http = new HttpConection('');
        if(sessionStorage.getItem('token') != null){
            HttpConection.setHeader("Authorization", "Bearer " + sessionStorage.getItem('token'));
        }
        HttpConection.setHeader("Content-Type", "application/json");
    }

    public login(user: UserModel) {
        let json = `{"login": "${user.getEmail()}", "senha": "${user.getSenha()}"}`;
        return this.http.sendJson('/auth', 'POST', json);
    }

    public logout() {
        return this.http.sendJson('/auth/logout', 'POST');
    }

}