import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface UserData {
  name: string;
  phone: string;
  email: string;
  state: string;
  district: string;
  targetExam: string;
  educationLevel: string;
  gender: string;
  dob: string;
  language: string;
  avatarInitials: string;
  registeredAt: string;
  isVerified: boolean;
}

interface UserContextType {
  user: UserData | null;
  isLoggedIn: boolean;
  login: () => void;
  register: (data: UserData) => void;
  logout: () => void;
  updateProfile: (partial: Partial<UserData>) => void;
}

const defaultDemoUser: UserData = {
  name: 'Rahul Kumar',
  phone: '+91 98765 43210',
  email: 'rahul.kumar@example.com',
  state: 'Uttar Pradesh',
  district: 'Lucknow',
  targetExam: 'UPSC CSE',
  educationLevel: 'Graduate',
  gender: 'Male',
  dob: '1999-05-15',
  language: 'Hindi',
  avatarInitials: 'RK',
  registeredAt: new Date().toISOString(),
  isVerified: true
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('parikshasetu_user') || localStorage.getItem('pariksha_mitra_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = () => {
    let savedUser = localStorage.getItem('parikshasetu_user') || localStorage.getItem('pariksha_mitra_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser(defaultDemoUser);
      localStorage.setItem('parikshasetu_user', JSON.stringify(defaultDemoUser));
    }
    setIsLoggedIn(true);
  };

  const register = (data: UserData) => {
    setUser(data);
    localStorage.setItem('parikshasetu_user', JSON.stringify(data));
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const updateProfile = (partial: Partial<UserData>) => {
    if (user) {
      const updatedUser = { ...user, ...partial };
      setUser(updatedUser);
      localStorage.setItem('parikshasetu_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, register, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
