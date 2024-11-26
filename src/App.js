import React from "react";
import { Routes, Route } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import NotFound from "./pages/NotFound";
function App(props) {

  return (
      <Provider store={store}>
        <main className="flex flex-col items-center">
          <div className="max-w-screen-xl self-stretch m-auto w-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/:any" exact element={<NotFound />} />
          </Routes>
          <Footer />
          </div>
        </main>
      </Provider>
  );
}

export default App;
