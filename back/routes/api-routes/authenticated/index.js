import testRoutes from './test.route';
import profileRoutes from './profile.route';
import vendorRoutes from './vendor.route';
import brandRoutes from './brand.route';
import categoryRoutes from './category.route';
import productRoutes from './product.route';
import inventoryRecevingRoutes from './InventoryReceving.route';

//  Private endpoints registered in List
//  List is iteratively registered in main index file
//  This file has private/authenticated routes only
const authenticatedRoutes = [
	{
		path: '/authTest',
		route: testRoutes,
	},
	{
		path: '/profile-settings',
		route: profileRoutes,
	},
	{
		path: '/vendors',
		route: vendorRoutes,
	},
	{
		path: '/brands',
		route: brandRoutes,
	},
	{
		path: '/categories',
		route: categoryRoutes,
	},
	{
		path: '/products',
		route: productRoutes,
	},
	{
		path: '/inventory',
		route: inventoryRecevingRoutes,
	},
];

module.exports = authenticatedRoutes;
