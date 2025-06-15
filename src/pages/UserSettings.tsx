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

  function verifyToken() {
        const token = sessionStorage.getItem("token");
        console.log("Token:", token);
        if (token === null || token === undefined) {

            alert("Você precisa estar logado para acessar essa página.");
            return (window.location.href = "/login");
        }
    }

  async function handleSave() {
    const username = (document.getElementById("Username") as HTMLInputElement).value;
    const email = (document.getElementById("Email") as HTMLInputElement).value;
    const password = (document.getElementById("Password") as HTMLInputElement).value;
    
    const userController = new UserControler();

    const user = new UserModel();

    await userController.getUserByToken().then((response) => {
      console.log(response);
      if (response.status === 200) {
        user.setUserId(response.data.usuarioId);
        user.setNomeCompleto(username);
        user.setEmail(email);
        user.setSenha(password);

        console.log("User data fetched successfully:", user);
        
        userController.updateUser(user).then((updateResponse) => {
          console.log(response);
          if (updateResponse.status === 200) {
            alert("User settings updated successfully!");
          } else {
            alert("Failed to update user settings.");
          }
        }).catch((error) => {
          console.error("Error updating user:", error);
          alert("An error occurred while updating your settings.");
        });
      } else {
        alert("Failed to fetch user data.");
      }
    });
  }

  async function handleDelete() {
    const userController = new UserControler();

    await userController.getUserByToken().then((response) => {
      if (response.status === 200) {
        const userId = response.data.usuarioId;
        userController.deleteUser(userId).then((deleteResponse) => {
          console.log(deleteResponse);
          if (deleteResponse.status === 204) {
            alert("User deleted successfully!");
            sessionStorage.removeItem('token'); 
            window.location.href = "/plink/login"; 
          } else {
            alert("Failed to delete user.");
          }
        }).catch((error) => {
          console.error("Error deleting user:", error);
          alert("An error occurred while deleting your account.");
        });
      } else {
        alert("Failed to fetch user data for deletion.");
      }
    });
  }

  let verifyOnce = false;
    useEffect(() => {
        if (!verifyOnce) {
            verifyToken();
            verifyOnce = true;
        }
    }, []);

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
              <IonInput id="Username"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput type="email" id="Email"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput type="password" id="Password"></IonInput>
            </IonItem>

            <IonButton expand="block" color="success" onClick={handleSave}>Save Changes</IonButton>
            <IonButton expand="block" color={"danger"} onClick={handleDelete}>Delete User</IonButton>
          </div>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default UserSettings;
