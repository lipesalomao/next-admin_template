import Cookies from "js-cookie";
import route from "next/router";
import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import IUser from "../../model/User";

interface IAuthContextProps {
  user?: IUser | null;
  googleLogin?: () => Promise<void>;
  logout?: () => Promise<void>;
}

async function normalizeUser(user: firebase.User): Promise<IUser> {
  const token = await user.getIdToken();
  return {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
    token,
    provider: user.providerData[0]?.providerId || null,
  };
}

function cookieManager(isLoggedIn: boolean) {
  if (isLoggedIn) {
    Cookies.set("admin-template-auth", "true", {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
}

const AuthContext = createContext<IAuthContextProps>({});

export const AuthProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);

  async function sessionControl(firebaseUser: firebase.User | null) {
    if (firebaseUser?.email) {
      const user = await normalizeUser(firebaseUser);
      cookieManager(true);
      setUser(user);
      setIsLoading(false);
      return user.email;
    } else {
      cookieManager(false);
      setUser(null);
      setIsLoading(false);
      return false;
    }
  }

  async function googleLogin() {
    try {
      setIsLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      sessionControl(response.user);
      route.push("/");
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    try {
      setIsLoading(true);
      await firebase.auth().signOut();
      await sessionControl(null);
      route.push("/login");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-template-auth")) {
      const authObserver = firebase.auth().onIdTokenChanged(sessionControl);
      return () => authObserver();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        googleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
