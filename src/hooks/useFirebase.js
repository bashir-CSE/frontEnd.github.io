import { useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import {
	getAuth,
	signInWithPopup,
	onAuthStateChanged,
	GoogleAuthProvider,
	signOut,
} from "firebase/auth";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState();

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const logout = () => {
		signOut(auth).then((user) => {
			setUser({});
		});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			}
		});
	}, []);

	return {
		user,
		error,
		signInUsingGoogle,
		logout,
	};
};

export default useFirebase;
