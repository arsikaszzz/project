import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomeView } from "./pages/HomeView";
import { CategoryView } from "./pages/CategoryView";
import { ArticleView } from "./pages/ArticleView";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="category/:slug" element={<CategoryView />} />
        <Route path="article/:id" element={<ArticleView />} />
        <Route path="*" element={<HomeView />} />
      </Route>
    </Routes>
  );
}

export default App;
