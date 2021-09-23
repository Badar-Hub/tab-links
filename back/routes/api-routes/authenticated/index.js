import testRoutes from './test.route';
import profileRoutes from './profile.route';
import vendorRoutes from './vendor.route';
import customerRoutes from './customer.route';
import brandRoutes from './brand.route';
import categoryRoutes from './category.route';
import productRoutes from './product.route';
import inventoryRecevingRoutes from './InventoryReceving.route';
import accountRoutes from './invoices.route';
import salesReturnRoutes from './salesReturn.route';

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
		path: '/customers',
		route: customerRoutes,
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
	{
		path: '/accounts',
		route: accountRoutes,
	},
	{
		path: '/sales-return',
		route: salesReturnRoutes,
	},
];

module.exports = authenticatedRoutes;
