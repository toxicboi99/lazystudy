import { create } from 'zustand';
import Cookies from 'js-cookie';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  checkAuth: () => boolean;
}

const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'admin123';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => {
    set({ user, isAuthenticated: true });
    Cookies.set('user', JSON.stringify(user), { expires: 7 });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
    Cookies.remove('user');
  },
  checkAuth: () => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      try {
        const user = JSON.parse(userCookie);
        set({ user, isAuthenticated: true });
        return true;
      } catch (error) {
        console.error('Error parsing user cookie:', error);
        set({ user: null, isAuthenticated: false });
      }
    }
    return false;
  },
}));

// Initialize auth state from cookie
useAuthStore.getState().checkAuth();

export const attemptLogin = (email: string, password: string): User | null => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return {
      id: 'admin',
      name: 'Admin User',
      email: ADMIN_EMAIL,
      role: 'admin',
    };
  }
  
  // For demo purposes, allow any other email/password combination as a regular user
  return {
    id: 'user-' + Math.random().toString(36).substr(2, 9),
    name: email.split('@')[0],
    email,
    role: 'user',
  };
};