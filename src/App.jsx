import { nanoid } from "nanoid";
import "./App.css";
import React, { Component, Fragment } from "react";
import pictureLibrary from "./resources/picture_library.js";
import { projectCategories } from "./resources/data.js";
import Header from "./components/header.jsx";
import Banner from "./components/banner.jsx";
import Services from "./components/services";
import ShareBanner from "./components/shareBanner";
import Projects from "./components/projects";
import ContactBanner from "./components/workTogetherBanner";
import AboutUs from "./components/aboutUs";
import QuoteBanner from "./components/quotesBanner";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import SideBar from "./components/sidebarNav";

class App extends Component {
  state = {
    pictureLibrary: pictureLibrary,
    projectCategories: projectCategories,
    contactMessages: [],
  };

  HandleActive = chosen => {
    let newChoice = this.state.projectCategories;
    newChoice.forEach(category => {
      category.value === chosen
        ? (category.active = "true")
        : (category.active = "false");
    });
    this.setState({ projectCategories: newChoice });
  };

  HandleSubmit = messageData => {
    const data = messageData;
    delete data.validated;
    let updatedState = this.state.contactMessages;
    updatedState = updatedState.concat({
      ...data,
      id: nanoid(),
      submitDate: new Date(),
    });
    this.setState({ contactMessages: updatedState });
  };

  render() {
    const { pictureLibrary, projectCategories } = this.state;
    return (
      <Fragment>
        <header>
          <Header />
        </header>
        <Banner />
        <main>
          <Services />
          <ShareBanner />
          <Projects
            thumbnails={pictureLibrary}
            categories={projectCategories}
            onActive={chosen => this.HandleActive(chosen)}
          />
          <ContactBanner />
          <AboutUs />
          <QuoteBanner />
          <ContactUs handleSubmit={data => this.HandleSubmit(data)} />
          <aside>
            <SideBar />
          </aside>
        </main>
        <footer>
          <Footer />
        </footer>
      </Fragment>
    );
  }
}

export default App;
