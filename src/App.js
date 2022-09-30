import "./App.css";
import Footer from "./pages/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Gallery from "./pages/project/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/team" exact component={Team} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
