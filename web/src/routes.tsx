import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Orphanage from "./pages/Orphanage";
import OrphanegesMap from "./pages/OrphanegesMap";
import CreateOrphanage from "./pages/CreateOrphanage";
import OrphanageCreated from "./pages/OrphanageCreated";
import Login from "./pages/Login";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/app" component={OrphanegesMap} />
				<Route path="/login" component={Login} />
				<Route path="/orphanages/create" component={CreateOrphanage} />
				<Route path="/orphanages/:id" component={Orphanage} />
				<Route path="/confirmed" component={OrphanageCreated} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
