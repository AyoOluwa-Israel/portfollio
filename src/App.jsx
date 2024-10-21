import Client from "./components/clients";
import CardContainer from "./components/clients/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import useDarkMode from "./utils/useDarkMode";



function App() {
  const [setTheme, colorTheme] = useDarkMode()
  return (
    <div className="bg-black dark:bg-white font-primary scroll-smooth transition ease-in duration-550">
      <div className="">
        <Header setTheme={setTheme} colorTheme={colorTheme} />
        <Hero />
        <Client />
        <CardContainer />
        <Services/>
        <Stats/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;


//https://api.render.com/deploy/srv-csav010gph6c73a6ngog?key=SIOUZ9lsyUQ