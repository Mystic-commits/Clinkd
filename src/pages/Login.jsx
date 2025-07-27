import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import "../styles/login.css";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login, signup } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (isSignUp) {
        await signup(email, password, name);
      } else {
        await login(email, password);
      }
      navigate("/");
    } catch (err) {
      setError(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-split-bg">
      <div className="login-split-card">
        {/* Left: Form */}
        <div className="login-split-form">
          <div className="login-split-title">Login</div>
          <div className="login-split-subtitle">
            {isSignUp ? "Create your account to get started" : "Welcome back! Please sign in to your account"}
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            {isSignUp && (
              <div className="login-split-input-group">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="login-split-input"
                  autoComplete="off"
                />
              </div>
            )}
            <div className="login-split-input-group">
              <Mail className="login-split-input-icon" />
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="login-split-input"
                autoComplete="off"
              />
            </div>
            <div className="login-split-input-group">
              <Lock className="login-split-input-icon" />
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="login-split-input"
                autoComplete="off"
              />
            </div>
            {error && <div className="login-split-error">{error}</div>}
            <button type="submit" className="login-split-btn" disabled={loading}>
              {loading ? (isSignUp ? "Signing up..." : "Logging in...") : (isSignUp ? "Sign Up" : "Login")}
            </button>
            <div className="login-split-or">or</div>
            <button
              type="button"
              className="login-split-google-btn"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <svg className="login-split-google-icon" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.68 2.54 30.77 0 24 0 14.82 0 6.71 5.1 2.69 12.44l7.98 6.2C12.13 13.13 17.62 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.04l7.18 5.59C43.98 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M10.67 28.65c-1.04-3.13-1.04-6.52 0-9.65l-7.98-6.2C.99 16.1 0 19.94 0 24c0 4.06.99 7.9 2.69 11.2l7.98-6.2z"/><path fill="#EA4335" d="M24 48c6.48 0 11.92-2.15 15.89-5.85l-7.18-5.59c-2.01 1.35-4.59 2.15-8.71 2.15-6.38 0-11.87-3.63-14.33-8.89l-7.98 6.2C6.71 42.9 14.82 48 24 48z"/></g></svg>
              Sign in with Google
            </button>
            <button
              type="button"
              className="login-split-toggle"
              onClick={() => setIsSignUp(v => !v)}
              disabled={loading}
            >
              {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </button>
          </form>
        </div>
        {/* Right: Festival Image */}
        <div className="login-split-brand">
          <div className="login-split-festival-bg">
            <img 
              src="/festival-login-bg.jpg" 
              alt="Festival background" 
              className="login-split-festival-image"
            />
            <div className="login-split-festival-overlay">
              <div className="login-split-logo">Clikd <span>Fest</span></div>
              <div className="login-split-brand-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;