import route from "next/router";
import { createContext, useState } from "react";
import firebase from "../../firebase/config";
import IUser from "../../model/Usuario";

interface IAuthContextProps {
  user?: IUser | null;
  googleLogin?: () => Promise<void>;
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

const AuthContext = createContext<IAuthContextProps>({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser | null>(null);

  async function googleLogin() {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (response.user?.email) {
      const user = await normalizeUser(response.user);
      setUser(user);
      route.push("/");
    }
    console.info("User logged in", user);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        googleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
