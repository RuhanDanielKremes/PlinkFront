import {
  IonPage, IonContent, IonItem, IonLabel, IonInput,
  IonButton, IonHeader, IonToolbar, IonTitle
} from "@ionic/react";
import { useEffect, useState } from "react";
import { UserModel } from "../model/UserModel";
import { UserControler } from "../controlers/UserControler";
import "./UserSettings.css";
import Sidebar from "../components/Sidebar";

const UserSettings: React.FC = () => {
  const [userData, setUserData] = useState<UserModel>(new UserModel());

  useEffect(() => {
    // Pega ID do usuário da sessão ou similar
    const userId = sessionStorage.getItem("userId");

    if (userId) {
      const userController = new UserControler();
      userController.getUserById(parseInt(userId)).then((response) => {
        const user = new UserModel();
        Object.assign(user, response); // preenche com os dados da API
        setUserData(user);
      });
    }
  }, []);

  function handleSave() {
    const userController = new UserControler();
    userController.updateUser(userData).then((response) => {
      if (response.status === 200) {
        alert("Dados atualizados com sucesso!");
      } else {
        alert("Erro ao atualizar: " + response.statusText);
      }
    }).catch(err => {
      console.error("Erro:", err);
      alert("Erro ao salvar.");
    });
  }

  function cloneUser(user: UserModel): UserModel {
  return Object.assign(new UserModel(), user);
}
 

  return (
    <div style={{display: "flex"}}>
      <Sidebar />
      <IonPage style={{marginLeft: '70px'}}>
        <IonHeader>
          <IonToolbar className="ionToolbar">
            <IonTitle>User Settings</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <div id="userSettingsContainer">
            <IonItem>
              <IonLabel position="stacked">Username</IonLabel>
              <IonInput value={userData.getNomeCompleto()} onIonChange={(e) => {
                userData.setNomeCompleto(e.detail.value!);
                setUserData(cloneUser(userData));
              }} />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput value={userData.getEmail()} onIonChange={(e) => {
                userData.setEmail(e.detail.value!);
                setUserData(cloneUser(userData));
              }} />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput type="password" value={userData.getSenha()} onIonChange={(e) => {
                userData.setSenha(e.detail.value!);
                setUserData(cloneUser(userData));
              }} />
            </IonItem>

            <IonButton expand="block" color="success" onClick={handleSave}>
              Save Changes
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default UserSettings;
