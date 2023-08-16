import { Link } from "react-router-dom";

export default function Landing() {

    return (
        <>
            <div className="gradient">Esta es la landing
                <Link to="/home">Entrar</Link>
            </div>

        </>
    )
}