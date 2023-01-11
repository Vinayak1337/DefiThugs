// @ts-check
'use strict';
import routesMap from '../router';
import authenticator from './authenticator';

/**
 * @param {import('express').Application} app
 */
const initRoutes = app => {
	for (const [path, router] of Object.entries(routesMap))
		app.use(path, authenticator, router);
};

export default initRoutes;
