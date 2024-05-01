'use client'
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import Image from "next/image";


export default function CartDrawer() {
    const useStore = useCartStore();
    return (
        <div onClick={() => useStore.toggleCart()} className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50">
            <div onClick={(e) => e.stopPropagation()} className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-8 overflow-y-scroll">
                <button onClick={() => useStore.toggleCart()} className="font-bold text-sm text-teal-600">
                    Voltar para o site
                </button>
                <div className="border-t border-gray-400 my-4"></div>
                {
                    useStore.cart.map(item => (
                        <div 
                            key={item.id}
                            className="flex gap-4 py-4"
                        >
                            <Image 
                                src={item.image}
                                alt={item.name}
                                width={120}
                                height={120}
                                className="object-cover w-24"
                            />
                            <div>
                            <h2 className="w-42 truncate">
                             {item.name}
                            </h2>
                            <h2>Quantidade: {item.quantity}</h2>
                            <p className="text-teal-600 font-bold text-sm">{formatPrice(item.price)}</p>
                            <button 
                                className="border rounded-md py-1 px-2 mt-2 text-sm mr-1"
                                onClick={() => useStore.addProduct(item)}>
                                    Adicionar
                            </button>
                            <button 
                                onClick={() => useStore.removeProduct(item)}
                                className="border rounded-md py-1 px-2 mt-2 text-sm">Remover</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}