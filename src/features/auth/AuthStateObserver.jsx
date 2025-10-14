import { useEffect } from "react";
import { useDispatch,  useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { setUser, clearUser, selectAuthIsInitialized } from "./authSlice";

const AuthStateObserver = ({children}) => {
    const dispatch = useDispatch();
    const isInitialized = useSelector(selectAuthIsInitialized);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({ uid: user.uid, email: user.email}));
            } else {
                dispatch(clearUser())
            }
        });
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [dispatch]);

    //Show children only after auth state is initialized
    if (!isInitialized) {
        return <div>Loading application...</div>
    }
    return children;
}

export default AuthStateObserver;