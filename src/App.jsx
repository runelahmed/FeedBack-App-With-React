import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

const App = () => {
  return (
    // Wrapping the app in FeedbackProvider to make feedback data available throughout the app
    <FeedbackProvider>
      <Router>
        {/* Header component is always displayed */}
        <Header />
        <div className="container">
          <Routes>
            {/* Route for the home page, which includes the feedback form, stats, and list */}
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            {/* Route for the about page */}
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        {/* AboutIconLink component is always displayed */}
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
};

export default App;
