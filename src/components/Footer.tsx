import { Toolbar } from "@mui/material";
import { useAppSelector } from "../hooks/useTypeSelector";

/** Footer */
export function Footer() {

    const selectedLanguage: string = useAppSelector(state => state.languageSliceReducer.value);
    const language: string = selectedLanguage != null ? selectedLanguage : "en";
    const currentTime: string = language === "en" ? "Current Time: " : "Aktualny czas: ";
    const numberOfArticles: string = language === "en" ? "Number of articles on the page: " : "Liczba artykułów na stronie: "

    let today: Date = new Date();
    let time: string = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    const { data } = useAppSelector(state => state.postsSliceReducer);
    const toolbarStyle = {
        backgroundColor: "#525252",
        height: "4vh",
        color: "white",
        left: "0px",
        bottom: "0px",
        zIndex: "999"
    }

    return (
        <Toolbar style={toolbarStyle}>
            <h1 style={{ fontSize: "20px" }}> {currentTime + time}</h1>
            <div style={{ textAlign: "right", display: "flex", justifyContent: "flex-end", flex: "1" }}>{data?.totalResults != undefined ? (numberOfArticles + data?.totalResults) : ""}</div>
        </Toolbar>
    )

}