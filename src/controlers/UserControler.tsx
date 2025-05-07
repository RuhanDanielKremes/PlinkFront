import { HttpConection } from "../components/Json";
import { UserModel } from "../model/UserModel";

export class UserControler {

    private http;  

    public constructor(){
        this.http = new HttpConection('');
        if(sessionStorage.getItem('token') != null){
            HttpConection.setHeader("Authorization", "Bearer " + sessionStorage.getItem('token'));
        }
        HttpConection.setHeader("Content-Type", "application/json");
    }

    public createUser(user:UserModel){
        let json = JSON.stringify(user);
        return this.http.sendJson('/usuarios','POST',json);
    }

    public getAllUsers() {
        return this.http.sendJson('/usuarios','GET');
    }

    public updateUser(user: UserModel) {
        let json = JSON.stringify(user);
        return this.http.sendJson('/usuarios','PUT',json);
    }

    public deleteUser(userId: number) {
        return this.http.sendJson('/usuarios/' + userId,'DELETE');
    }

    public getUserById(userId: number) {
        return this.http.sendJson('/usuarios/' + userId,'GET');
    }

}