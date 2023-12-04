import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Login, Register, Chat } from "../pages";
import { RootState } from "../redux";

interface ProtectedRoute {
  user: boolean;
  children: React.ReactNode;
}

const ProtectedRoute = ({ user, children }: ProtectedRoute) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const Router = () => {
  const isLogged = useSelector(
    (state: RootState) => state.userSlice.userState.isLogged
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute user={isLogged}>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
