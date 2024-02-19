import { Routes, Route } from "react-router-dom";
import { Home, About, Privacy, Terms, NotFound, SignUp } from "./Index";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="tos" element={<Terms />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
