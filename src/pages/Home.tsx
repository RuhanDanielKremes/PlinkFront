import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Sidebar from '../components/Sidebar';

const Home: React.FC = () => {

  let newvar = "text";

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <IonPage className="ionPage" style={{ marginLeft: '70px' }}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{newvar}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{newvar}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer />
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Home;
