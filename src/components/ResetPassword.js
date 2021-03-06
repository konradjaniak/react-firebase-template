import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ResetPassword() {
    const emailRef = useRef();
    const [error, setError] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);
    const { resetPassword } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setMessage("");
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your email for further instructions");
        } catch (err) {
            setError("Failed to reset password");
        }
        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={emailRef}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Button
                            type="submit"
                            className="w-100 mt-2"
                            disabled={loading}
                        >
                            Reset Password
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Log In</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    );
}
