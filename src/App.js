import logo from "./logo.svg";
import "./App.css";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { useState, useEffect } from "react";

function App() {
	GoogleAuth.initialize({
		clientId:
			"188386290850-9fp1l8ckjp146sh83djf2tdfk7fq478i.apps.googleusercontent.com",
		scopes: ["profile", "email"],
		grantOfflineAccess: true,
	});

	// useEffect(()=>{
	//   GoogleAuth.init();
	// },[])

	const [user, setUser] = useState(null);

	const signIn = async () => {
		try {
			const userData = await GoogleAuth.signIn();
			console.log(userData);
			setUser(userData);
		} catch (error) {
			console.log(error);
		}
	};

	const refresh = async () => {
		try {
			const authCode = await GoogleAuth.refresh();
			console.log("refresh: ", authCode);
		} catch (error) {
			console.log(error);
		}
	};

	const signOut = async () => {
		try {
			await GoogleAuth.signOut();
			console.log("user Signed out!");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Welcome!</p>
				<button onClick={signIn}>Login with google</button>
				{user !== null ? <p>{user.email}</p> : null}
			</header>
		</div>
	);
}

export default App;
