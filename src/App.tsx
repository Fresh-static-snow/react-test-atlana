import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./components/UserList/UserList";
import UserPage from "./components/UserPage/UserPage";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <h1 style={{ textAlign: "center" }}>GitHub Searcher</h1>
        <Router>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/users/:username" element={<UserPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
