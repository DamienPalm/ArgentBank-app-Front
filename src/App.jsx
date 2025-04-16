import "react-router";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
