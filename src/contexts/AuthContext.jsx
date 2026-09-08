import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const STORAGE_KEY = 'gaco_user';
const USERS_LIST_KEY = 'gaco_registered_users';

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login'); // 'login' | 'register'

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [currentUser]);

  const openAuthModal = (tab = 'login') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const login = async (email, password) => {
    // Basic verification from registered users or create initial demo
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem(USERS_LIST_KEY)) || [];
    } catch {
      users = [];
    }

    const matched = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (matched) {
      if (matched.password === password) {
        setCurrentUser(matched);
        closeAuthModal();
        return { success: true, user: matched };
      } else {
        return { success: false, message: 'Mật khẩu không chính xác' };
      }
    }

    // If no existing user, let's create a realistic mock user for smooth demo
    const newUser = {
      id: 'usr_' + Date.now(),
      email,
      name: email.split('@')[0],
      phone: '0988123456',
      persona: 'student',
      joinedAt: new Date().toISOString(),
      points: 150,
      vouchers: ['VOUCHER149K', 'FREESHIP']
    };

    users.push({ ...newUser, password });
    localStorage.setItem(USERS_LIST_KEY, JSON.stringify(users));
    setCurrentUser(newUser);
    closeAuthModal();
    return { success: true, user: newUser };
  };

  const register = async ({ name, email, password, phone, persona = 'student' }) => {
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem(USERS_LIST_KEY)) || [];
    } catch {
      users = [];
    }

    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: 'Email này đã được đăng ký trước đó!' };
    }

    const newUser = {
      id: 'usr_' + Date.now(),
      name,
      email,
      phone,
      persona,
      joinedAt: new Date().toISOString(),
      points: 200,
      vouchers: ['VOUCHER149K', 'FREESHIP', 'GACOWELCOME']
    };

    users.push({ ...newUser, password });
    localStorage.setItem(USERS_LIST_KEY, JSON.stringify(users));
    setCurrentUser(newUser);
    closeAuthModal();
    return { success: true, user: newUser };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updateProfile = (data) => {
    if (!currentUser) return;
    const updated = { ...currentUser, ...data };
    setCurrentUser(updated);

    try {
      const users = JSON.parse(localStorage.getItem(USERS_LIST_KEY)) || [];
      const idx = users.findIndex(u => u.id === currentUser.id);
      if (idx !== -1) {
        users[idx] = { ...users[idx], ...data };
        localStorage.setItem(USERS_LIST_KEY, JSON.stringify(users));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        isAuthModalOpen,
        authModalTab,
        setAuthModalTab,
        openAuthModal,
        closeAuthModal,
        login,
        register,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
