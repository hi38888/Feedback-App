import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";
//import Card from "./components/shared/Card";
//import Post from "./components/Post";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            {/*  <Route path='/post/*' element={<Post />} />*/}
            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIconLink />

          {/* 
        <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card>
        */}
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
