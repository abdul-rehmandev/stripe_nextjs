"use client"
import React from 'react'
import CartButton from "@/components/Client/CartButton"
import CartItem from "@/components/Client/CartItem"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useCart } from './CartContext'

const Cart = () => {

    const { cart } = useCart();

    const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0)

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">#</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {cart.length > 0 && <>
                    {cart.map((product, index) => (
                        <CartItem key={index} product={product} indexNumber={index} />
                    ))}
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell className="text-right"><CartButton totalAmount={totalAmount} /></TableCell>
                    </TableRow>
                </>}
            </TableBody>
        </Table>
    )
}

export default Cart