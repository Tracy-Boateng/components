import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import bnb1 from "./assets/bnb1.jpg";
import bnb2 from "./assets/bnb2.jpg";
import bnb3 from "./assets/bnb3.jpg";
import bnb4 from "./assets/bnb4.jpg";

function App() {

    const navLinks = [
        "Home",
        "Rooms",
        "Experiences",
        "Contact"
    ];

    const galleryImages = [
        bnb1,
        bnb2,
        bnb3,
        bnb4
    ];

    return (
        <div className="app">
            <Header navLinks={navLinks} />

            <Banner
                title="Find your next unforgettable stay"
                text="Unique homes, beachfront villas, and cozy cabins around the world."
            />

            <Gallery images={galleryImages} />

            <Footer />
        </div>
    );
}

export default App;