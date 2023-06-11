import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./Account";
import Signin from "./Signin";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";
import Private from "./Private";

export default function AllRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Private>
						<Account />
					</Private>
				}
			/>
			<Route path="/signin" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/resetPassword" element={<ResetPassword />} />
			<Route path="*" element={<h1>Page Not Found</h1>} />
		</Routes>
	);
}
