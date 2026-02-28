import Container from "./components/Container";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import "./index.css";

function App() {
    return (
        <>
            <Container>
                {/*<Header />*/}
                <Hero />
                <Skills />
            </Container>
        </>
    );
}

export default App;
