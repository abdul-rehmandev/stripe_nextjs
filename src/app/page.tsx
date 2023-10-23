import Cart from "@/components/Client/Cart"
import CartButton from "@/components/Client/CartButton"
import CartItem from "@/components/Client/CartItem"
import Product from "@/components/Client/Product"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const Products: Product[] = [
  {
    id: "1",
    name: "Macbook Air M2",
    price: 1200,
    quantity: 0,
    category: "Laptop"
  },
  {
    id: "2",
    name: "iPhone 15",
    price: 1400,
    quantity: 0,
    category: "Mobile"
  },
  {
    id: "3",
    name: "PS5",
    price: 700,
    quantity: 0,
    category: "Gaming"
  },
  {
    id: "4",
    name: "Galaxy S23",
    price: 1100,
    quantity: 0,
    category: "Mobile"
  },
  {
    id: "5",
    name: "Logitech H390",
    price: 250,
    quantity: 0,
    category: "Headset"
  }
]

export default function Home() {
  return (
    <main className="container">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="flex flex-wrap">
        {Products.map((product, index: number) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <h1 className="text-2xl font-bold">My Cart</h1>
      <div>
        <Cart />
      </div>
    </main>
  )
}
