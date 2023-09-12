import ActionsButton from "../../components/ActionsButton/ActionsButton";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function RequestsFormikDetailsView() {

    return (
        <>
            <Header title='Acciones con tus demandas' />
            <ActionsButton />
            <ScrollToTop />
            <Footer />
        </>

    )
}