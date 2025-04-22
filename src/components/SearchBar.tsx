import { IonIcon, IonInput, IonItem } from "@ionic/react";
import { search } from "ionicons/icons";
import './SearchBar.css';
import { useEffect } from "react";

const SearchBar: React.FC = () => {

    function searchHandler() {
        const searchContent = document.getElementById("searchContent") as HTMLInputElement;
        if (searchContent) {
            if (searchContent.value !== "") {
                let search = "/search/p=" + searchContent.value.replace(/ /g, "+") + "#";
                window.location.href = search;
            }
        }
    }

    function getSearchArg() {
        const searchContent = document.getElementById("searchContent") as HTMLInputElement;
        if (searchContent) {
            let link = window.location.href;
            if (link.includes("p=")) {
                searchContent.value = link.split("p=")[1].split("#")[0].replace(/\+/g, " ");
            } else {
                searchContent.value = "";
            }
        }
    }

    useEffect(() => {
        getSearchArg();
    }, []);
    
    return (
        <>
            <IonItem id="searchBox" lines="none">
                <IonInput clearInput={true} id="searchContent" placeholder="What are you loking for?"/>
                <IonIcon icon={search} id="searchIcon" onClick={() => searchHandler()}></IonIcon>
            </IonItem>
        </>
    );

}

export default SearchBar;