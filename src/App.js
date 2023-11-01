import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AuthRoute from "./components/Routes/AuthRoute";
import AccountRoute from "./components/Routes/AccountRoute";
import Header from "./components/Header/Header";
import FindAcademies from "./pages/FindAcademies/FindAcademies";
import RegistAcademy from "./pages/RegistAcademy/RegistAcademy";
import AcademyInfo from "./pages/AcademyInfo/AcademyInfo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/auth/*" element={ <AuthRoute/> } /> 
        <Route path="/account/*" element={ <AccountRoute/> } /> 
        <Route path="/academy/find" element={ <FindAcademies/> } /> 
        <Route path="/academy/regist" element={ <RegistAcademy/> } /> 
        <Route path="/academy/info*" element={ <AcademyInfo/> } /> 
      </Routes>
    </>
  );
}

export default App;
