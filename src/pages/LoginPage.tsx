import { IonButton, IonContent, IonIcon, IonImg, IonInput, IonItem, IonPage, IonTitle } from "@ionic/react"
import plink from "../assets/images/Plink.png";
import { personCircle, lockClosed} from "ionicons/icons";
import './LoginPage.css';
import { useHistory } from "react-router-dom";
import { UserModel } from "../model/UserModel";
import { LoginControler } from "../controlers/LoginControler";

const LoginPage: React.FC = () => {
    const history = useHistory();

    function submitForm() {

        try {
            let token = sessionStorage.getItem('token');
            if (token !== null && token !== undefined) {
                sessionStorage.removeItem('token');
            }
        } catch {
            
        }

        const user = (document.getElementById("User") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;

        let userModel = new UserModel();
        userModel.setLogin(user);
        userModel.setSenha(password);

        console.log(userModel.toJson());

        const loginControler = new LoginControler();

        loginControler.login(userModel).then((response) => {
            console.log(response);
            if (response.status === 200) {
                sessionStorage.setItem('token', response.data.token);
                history.push("/recipes");
            } else {
                alert("Error: " + response.statusText);
            }
        }).catch((error) => {
            console.error("Error logging in:", error);
            alert("Error: " + error.message);
        });

    }

    return (
        <IonPage id="main-content">
            <IonContent fullscreen>
                <div className="setCenter">
                    <div className="mainContainer"> 
                        <IonImg src={plink} onClick={() => history.push("/recipes")}></IonImg>
                        <IonItem id="II01" className="ionItemBottonBorder itemLightBackground1" style={{marginTop : "20px"}}>
                            <IonTitle className="ion-text-center" size="large" style={{marginBottom: "20px", marginTop: "20px", color:"#000", fontSize:"40px"}}>LOGIN</IonTitle>
                        </IonItem>
                        <IonItem id="II02" className="ion-item-login itemLightBackground1" style={{maxWidth: "600px"}}>
                            {/* <form onSubmit={handleSubmit(tryLogin)}> */}
                            <form>
                                <IonItem id="II03" className="ion-item-login itemLightBackground1 greyText" style={{ "--min-height": "80px", marginTop: "20px"}}>
                                    <IonIcon icon={personCircle} color="primary" style={{marginRight: "20px"}}></IonIcon>
                                    <IonInput className="ion-input-login" label="Usuário" labelPlacement="floating"  placeholder="Usuário" id="User" required style={{width:"460px"}}></IonInput>
                                </IonItem>
                                <IonItem id="II04" className="ion-item-login itemLightBackground1 greyText" style={{ "--min-height": "80px", Width: "400px" }}>
                                    <IonIcon icon={lockClosed} color="primary" style={{marginRight: "20px"}}></IonIcon>
                                    <IonInput className="ion-input-login" label="Senha" labelPlacement="floating" placeholder="Senha" id="password" type="password" required style={{width:"460px"}}></IonInput>
                                </IonItem>
                                <div className="setCenter">
                                    <IonButton id="loginButton" onClick={submitForm}>LOGIN</IonButton>
                                </div>
                            </form>
                        </IonItem>
                        <IonItem type="submit"  style={{justifyContent:"center"}} id="subscribeContainer" className="ion-item-login itemLightBackground1 greyText" lines="none">
                            <p>Does you not have an login?</p>
                            <a href="/signin" style={{paddingLeft:"3px"}}>Subscribe!</a>
                        </IonItem>
                        {/* <IonButton type="button" onClick={() => history.push("/recipe")}>Go to recipes</IonButton> */}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )

}

export default LoginPage;