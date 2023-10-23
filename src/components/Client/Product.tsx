"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from './CartContext'



interface ProductProps {
    product: Product
}

const Product: React.FC<ProductProps> = ({ product }) => {

    const { addToCart, cart } = useCart();

    const isProductInCart = cart.some((item) => item.id === product.id);

    return (
        <Card className='mr-2 my-2 min-w-[280px]'>
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.category}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className='font-semibold'>${product.price}.00</p>
            </CardContent>
            <CardFooter>
                <Button disabled={isProductInCart} onClick={() => addToCart(product)}>{isProductInCart ? "Added to Cart" : "Add to Cart"}</Button>
            </CardFooter>
        </Card>

    )
}

export default Product