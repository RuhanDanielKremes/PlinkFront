import { IonButton, IonContent, IonIcon, IonImg, IonInput, IonItem, IonPage, IonTitle, IonToggle } from "@ionic/react"
import plink from "../assets/images/Plink.png";
import { personCircle, lockClosed, navigate, mail } from "ionicons/icons";
import './SignInPage.css';
import { useHistory } from "react-router-dom";
import { UserModel } from "../model/UserModel";
import { UserControler } from "../controlers/UserControler";

const SignInPage: React.FC = () => {
    const history = useHistory();

    function submitForm(event: React.FormEvent) {

        const user = (document.getElementById("User") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;

        let userModel = new UserModel();

        userModel.setLogin(email);
        userModel.setSenha(password);
        userModel.setEmail(email);
        userModel.setNomeCompleto(user);

        console.log(userModel.toJson());

        const userControler = new UserControler();
        userControler.createUser(userModel).then((response) => {
            console.log(response);
            if (response.status === 201) {
                alert("User created successfully!\nPlease login to continue.");
                history.push("/login");
            } else {
                alert("Error: " + response.statusText);
            }
        }).catch((error) => {
            console.error("Error creating user:", error);
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
                            <IonTitle className="ion-text-center" size="large" style={{marginBottom: "20px", marginTop: "20px", color:"#000", fontSize:"40px"}}>Subscribe</IonTitle>
                        </IonItem>
                        <IonItem id="II02" className="ion-item-login itemLightBackground1" style={{maxWidth: "600px"}}>
                            <form>
                                <IonItem id="II03" className="ion-item-login itemLightBackground1 greyText" style={{ "--min-height": "80px", marginTop: "20px"}}>
                                    <IonIcon icon={personCircle} color="primary" style={{marginRight: "20px"}}></IonIcon>
                                    <IonInput className="ion-input-login" label="Fullname" labelPlacement="floating"  placeholder="Fullname" id="User" required style={{width:"460px"}}></IonInput>
                                </IonItem>
                                <IonItem id="II04" className="ion-item-login itemLightBackground1 greyText" style={{ "--min-height": "80px", Width: "400px" }}>
                                    <IonIcon icon={lockClosed} color="primary" style={{marginRight: "20px"}}></IonIcon>
                                    <IonInput className="ion-input-login" label="Senha" labelPlacement="floating" placeholder="Senha" id="password" type="password" required style={{width:"460px"}}></IonInput>
                                </IonItem>
                                <IonItem id="II05" className="ion-item-login itemLightBackground1 greyText" style={{ "--min-height": "80px", Width: "400px" }}>
                                    <IonIcon icon={mail} color="primary" style={{marginRight: "20px"}}></IonIcon>
                                    <IonInput className="ion-input-login" label="Email" labelPlacement="floating" placeholder="Email" id="email" required style={{ width: "460px" }}></IonInput>
                                </IonItem>
                                <div className="setCenter">
                                    <IonButton id="loginButton" onClick={submitForm}>Subscribe</IonButton>
                                </div>
                            </form>
                        </IonItem>
                        <IonItem style={{justifyContent:"center"}} id="subscribeContainer" className="ion-item-login itemLightBackground1 greyText" lines="none">
                            <p>Already have an account?</p>
                            <a href="/login" style={{paddingLeft:"3px"}}>Login!</a>
                        </IonItem>
                        {/* <IonButton type="button" onClick={() => history.push("/recipe")}>Go to recipes</IonButton> */}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )

}

export default SignInPage;