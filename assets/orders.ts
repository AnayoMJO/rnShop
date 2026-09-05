import { Order } from './types/order';
import { PRODUCTS } from './products';

export const ORDERS: Order[] = [
  {
    id: '1',
    item: 'Order 1',
    details: 'Details about order 1',
    status: 'Pending',
    slug: 'order-1',
    date: '2024-07-01',
    items: PRODUCTS.filter((p) => [1, 2].includes(p.id)),
  },
  {
    id: '2',
    item: 'Order 2',
    details: 'Details about order 2',
    status: 'Completed',
    slug: 'order-2',
    date: '2024-07-02',
    items: PRODUCTS.filter((p) => [3, 4].includes(p.id)),
  },
  {
    id: '3',
    item: 'Order 3',
    details: 'Details about order 3',
    status: 'Shipped',
    slug: 'order-3',
    date: '2024-07-03',
    items: PRODUCTS.filter((p) => [5, 6].includes(p.id)),
  },
  {
    id: '4',
    item: 'Order 4',
    details: 'Details about order 4',
    status: 'InTransit',
    slug: 'order-4',
    date: '2024-07-04',
    items: PRODUCTS.filter((p) => [7, 8].includes(p.id)),
  },
];
