"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { useCart } from './CartContext'

interface CartBtnPropsTypes {
    totalAmount: number
}

const CartButton: React.FC<CartBtnPropsTypes> = ({ totalAmount }) => {

    const { cart } = useCart();

    const handleCheckOut = async () => {
        await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ products: cart })
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.url) {
                window.location.href = response.url;
            }
        })
    }

    return (
        <Button onClick={handleCheckOut}>
            Checkout ${totalAmount}.00
        </Button>
    )
}

export default CartButton