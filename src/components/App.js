import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "./ResetPassword";
import UpdateProfile from "./UpdateProfile";

export default function App() {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <AuthProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={
                                    <PrivateRoute>
                                        <Dashboard />
                                    </PrivateRoute>
                                }
                            />
                            <Route exact path="/update-profile" element={
                                    <PrivateRoute>
                                        <UpdateProfile />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/reset-password" element={<ResetPassword />} />
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </div>
        </Container>
    );
}
