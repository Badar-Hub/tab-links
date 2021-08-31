import { inventoryList } from './helpers/getItems';
import { getItem } from './helpers/getItem';
import { receiveProduct } from './helpers/receiveProducts';
import { updateRecevingInfo } from './helpers/updateReceving';

export const inventory = {
	getItem,
	inventoryList,
	receiveProduct,
	updateRecevingInfo,
};
