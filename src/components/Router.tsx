import { Route, Routes } from "react-router-dom";
import { Defaultlayout } from "../layouts/DefaultLayout";
import { History } from "../page/History/index";
import { Home } from "../page/Home/index";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
