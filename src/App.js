import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AuthRoute from "./components/Routes/AuthRoute";
import AccountRoute from "./components/Routes/AccountRoute";
import Header from "./components/Header/Header";
import FindAcademies from "./pages/FindAcademies/FindAcademies";
import RegistAcademy from "./pages/RegistAcademy/RegistAcademy";
import AcademyInfo from "./pages/AcademyInfo/AcademyInfo";
import Footer from "./components/Footer/Footer";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const wrapper = css`
  width: 100%;
  height: 100vh;
`

const content = css`
  flex: 1;
  padding-bottom: 90px;
`

function App() {
  return (
    <div css={wrapper}>
      <Header />
      <div css={content}>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/auth/*" element={ <AuthRoute/> } /> 
          <Route path="/account/*" element={ <AccountRoute/> } /> 
          <Route path="/academy/find" element={ <FindAcademies/> } /> 
          <Route path="/academy/regist" element={ <RegistAcademy/> } /> 
          <Route path="/academy/info" element={ <AcademyInfo/> } /> 
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
