import InitialPage from "@/pages/Initial/Initial";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import RegisterPage from "@/pages/Register/RegisterPage";
import Layout from "@layout/Layout";
import LoginPage from "@pages/Login/LoginPage";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
					<Route path="/" element={<InitialPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

					<Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
