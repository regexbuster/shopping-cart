import Header from "./Header";
import '../styles/home.css'

function Home() {

    return (
        <>
            <Header />
            <div className="shop-details">
                <h1>Shop Name</h1>
                <p>We are a small business focused on locally sourced products.</p>
            </div> 
        </>
    );
}

export default Home;