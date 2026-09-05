import Auth from "@/app/auth";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import {
  PropsWithChildren,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";

export type AuthData = {
  session: Session | null;
  mounting: boolean;
  user: any;
};
const authContext = createContext<AuthData>({
  session: null,
  mounting: true,
  user: null,
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<any>(null);
  const [mounting, setMounting] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);

      if (session) {
        const {
          data: { user },
          error,
        } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();
        if (error) {
          console.error("Error fetching user data:", error);
        } else {
          setUser(user);
        }
        setMounting(false);
      }
    };

    fetchSession();
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <authContext.Provider value={{ session, mounting, user }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
