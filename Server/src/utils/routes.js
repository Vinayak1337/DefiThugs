// @ts-check
'use strict';
import routesMap from '../router';

/**
 * @param {import('express').Application} app
 */
const initRoutes = app => {
	for (const [path, router] of Object.entries(routesMap)) app.use(path, router);
};

export default initRoutes;
