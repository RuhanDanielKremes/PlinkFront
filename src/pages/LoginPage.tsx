import { IonButton, IonContent, IonIcon, IonImg, IonInput, IonItem, IonPage, IonTitle, IonToggle } from "@ionic/react"
import plink from "../assets/images/Plink.png";
import { personCircle, lockClosed, navigate } from "ionicons/icons";
import './LoginPage.css';
import { useHistory } from "react-router-dom";

const LoginPage: React.FC = () => {
    const history = useHistory();

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
                                    <IonButton type="submit" id="loginButton">LOGIN</IonButton>
                                </div>
                            </form>
                        </IonItem>
                        <IonItem style={{justifyContent:"center"}} id="subscribeContainer" className="ion-item-login itemLightBackground1 greyText" lines="none">
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