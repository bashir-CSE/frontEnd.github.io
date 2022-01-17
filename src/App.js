import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePages from "./Components/HomePages/HomePages";
import Firstaid from "./Pages/Firstaid/Firstaid";
import HospitalNearMe from "./Pages/HospitalNearMe/HospitalNearMe";
import MyfamilyPage from "./Pages/MyfamilyPage/MyfamilyPage";
import MyProfile from "./Pages/MyProfile/MyProfile";
import MyRecord from "./Pages/MyRecord/MyRecord";
import PharmecyNearMe from "./Pages/PharmecyNearMe/PharmecyNearMe";

import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import DisisDitails from "./Components/LandPage/DisisDitails";

function App() {
	return (
		<div className='App position-relative'>

			<AuthProvider>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path='/'>
							<HomePages />
						</Route>
						<PrivateRoute exact path='/MyfamilyPage'>
							<MyfamilyPage />
						</PrivateRoute>
						<PrivateRoute exact path='/MyRecord'>
							<MyRecord />
						</PrivateRoute>
						<PrivateRoute exact path='/MyProfile'>
							<MyProfile />
						</PrivateRoute>
						<PrivateRoute exact path='/Firstaid'>
							<Firstaid />
						</PrivateRoute>
						<PrivateRoute exact path='/HospitalNearMe'>
							<HospitalNearMe />
						</PrivateRoute>
						<PrivateRoute exact path='/PharmecyNearMe'>
							<PharmecyNearMe />
						</PrivateRoute>
						<PrivateRoute exact path='/PharmecyNearMe'>
							<PharmecyNearMe />
						</PrivateRoute>
						<Route exact path='/disisdetails/:id'>
							<DisisDitails/>
						</Route>
						<Route exact path='/login'>
							<LoginPage />
						</Route>
					</Switch>
					{/* <Footer /> */}
				</BrowserRouter>

				</AuthProvider>
		</div>
	);
}

export default App;
