import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MainPage() {

    return (
        <div className="container">
            <Header />
            <Content />
            <Footer />
        </div>
    )

}