import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./_root/pages";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SigninForm />} />

          <Route path="/signin" element={<SignupForm />} />
        </Route>
        <Route
          path="/"
          element={
            <RootLayout>
              <Home />
            </RootLayout>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
