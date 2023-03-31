import { Header } from "./Header";
import { Footer } from "./Footer";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import { Button } from "@mui/material";
import { useAppSelector } from "../hooks/useTypeSelector";

/** Container */
export function Container() {

    const btnLabelEn: string = "Go to news";
    const btnLabelPl: string = "Przejdź do wiadomości";
    const textEn: string = "GnNews Generator your best source of information"
    const textPl: string = "GnNews Generator Twoje najlepsze źródło informacji"
    const selectedLanguage: string = useAppSelector(state => state.languageSliceReducer.value);

    const btnLabel: string = selectedLanguage === "en" ? btnLabelEn : btnLabelPl;
    const text: string = selectedLanguage === "en" ? textEn : textPl;

    return (
        <div className="container" >
            <Header />
            <div className="container-body">
                <div className="container-body-child">
                    <div style={{ flex: "1" }}>
                        <h1 className="container-text"> {text}</h1>
                        <Button className="container-btn" href="/news">{btnLabel}</Button>
                    </div>
                    <div className="container-navigation">
                        <div className="container-image">
                            <img src="/logo.png" style={{ maxWidth: "500px", alignItems: "flex-end", opacity: "0.6" }} />
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            <SimpleBottomNavigation />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}