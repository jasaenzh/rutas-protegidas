import { BrowserRouter, } from "react-router-dom";
// Hooks AuthProvider
import AuthProvider from "./auth/AuthProvider";
import AppRoutes from "./routers/AppRouter";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App