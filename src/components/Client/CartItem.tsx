"use client"
import React from 'react'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useCart } from './CartContext'

interface CartItemsPropsTypes {
    product: Product,
    indexNumber: number
}

const CartItem: React.FC<CartItemsPropsTypes> = ({ product, indexNumber }) => {

    const { incrementQuantity, decrementQuantity, cart, removeFromCart } = useCart();

    const handleDecrement = (productId: number) => {
        decrementQuantity(productId);

        const product = cart.find((item: Product) => item.id === productId.toString());
        if (product && product.quantity == 1) {
            removeFromCart(productId)
        }
    }

    return (
        <TableRow>
            <TableCell className="font-medium">{indexNumber + 1}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>${product.price}.00</TableCell>
            <TableCell className='flex items-center'>
                <Button variant="outline" size="icon" className='rounded-[50px]' onClick={() => handleDecrement(product.id)}>
                    <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/20/minus.png" alt="minus" />
                </Button>
                <span className='mx-2 font-semibold'>{product.quantity}</span>
                <Button variant="outline" size="icon" className='rounded-[50px]' onClick={() => incrementQuantity(product.id)}>
                    <img width="20" height="20" src="https://img.icons8.com/windows/20/add--v1.png" alt="add--v1" />
                </Button>
            </TableCell>
            <TableCell className="text-right">${product.price * product.quantity}.00</TableCell>
        </TableRow>
    )
}

export default CartItem