import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes, 
  FaUserCircle,
  FaSignOutAlt,
  FaUser
} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [isSignup, setIsSignup] = useState(false);
  const [authError, setAuthError] = useState('');
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [authLoading, setAuthLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/skills', name: 'Skills' },
    { path: '/projects', name: 'Projects' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/contact', name: 'Contact' },
    { path: '/about', name: 'About' },
  ];

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);

    try {
      const endpoint = isSignup 
        ? 'http://localhost:8080/api/auth/signup' 
        : 'http://localhost:8080/api/auth/signin';
      
      const payload = isSignup
        ? {
            username: form.username,
            email: form.email,
            password: form.password,
            roles: ["ROLE_USER"]
          }
        : {
            email: form.email, // <-- FIXED: use 'email' not 'username'
            password: form.password
          };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        
        if (isSignup) {
          setIsSignup(false);
          setAuthError('');
          setForm(prev => ({ ...prev, password: '' }));
        } else {
          const userData = {
            username: data.username,
            email: form.email,
            token: data.token
          };
          
          sessionStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
          setShowAuth(false);
          setForm({ username: '', email: '', password: '' });
          setAuthError('');
        }
      } else {
        const errorData = await response.json();
        setAuthError(errorData.message || 'Authentication failed. Please try again.');
      }
    } catch (error) {
      setAuthError('Network error. Please check your connection.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setShowProfile(false);
    sessionStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">SK</Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {!user ? (
          <button className="btnsecondary" onClick={() => setShowAuth(true)}>
            Sign Up / Login
          </button>
        ) : (
          <div 
            className="profile-container"
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
          >
            <FaUserCircle className="profile-icon" size={28} />
            {showProfile && (
              <div className="profile-dropdown">
                <div className="dropdown-header">
                  <div>
                    <div className="dropdown-name">{user.username}</div>
                    <div className="dropdown-email">{user.email}</div>
                  </div>
                </div>
                <Link to="/profile" className="dropdown-item">
                  <FaUser /> My Profile
                </Link>
                <button className="dropdown-item" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        )}

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {showAuth && (
        <div className="auth-popup">
          <div className="auth-popup-content">
            <button className="close-btn" onClick={() => setShowAuth(false)}>×</button>
            <h3>{isSignup ? 'Create Account' : 'Welcome Back'}</h3>
            <form onSubmit={handleAuth}>
              {authError && <div className="auth-error">{authError}</div>}
              
              {isSignup && (
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleInputChange}
                  required
                  minLength={isSignup ? 6 : undefined}
                />
              </div>
              
              <button 
                className="btnprimary" 
                type="submit"
                disabled={authLoading}
              >
                {authLoading 
                  ? (isSignup ? 'Signing Up...' : 'Logging In...')
                  : (isSignup ? 'Sign Up' : 'Login')}
              </button>
              
              <div className="auth-footer">
                <p>
                  {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                  <button 
                    type="button"
                    className="text-link"
                    onClick={() => {
                      setIsSignup(!isSignup);
                      setAuthError('');
                    }}
                  >
                    {isSignup ? 'Login' : 'Sign Up'}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;