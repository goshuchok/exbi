export interface OrderType {
  id: number;
  image: string;
  name: string;
  price: number;
  date: string;
  invoice: {
    connect: number;
    content: string;
  };
  client: {
    name: string;
    email: string;
  };
  network: string;
  completed: boolean;
}
