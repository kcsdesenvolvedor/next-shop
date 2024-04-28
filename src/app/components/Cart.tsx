'use client'
import { useCartStore } from "@/store";

export function Cart() {
    const useStore = useCartStore();
    return (
        <div>
            <div className="flex items-center cursor-pointer relative" onClick={() => useStore.toggleCart()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M23.95,6.99l-.88,4.39c-.42,2.1-2.27,3.62-4.41,3.62H6.02c.25,1.71,1.73,3,3.46,3h10.02c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H9.48c-2.23,0-4.15-1.67-4.46-3.88L3.24,2.29c-.1-.74-.74-1.29-1.49-1.29H.5c-.28,0-.5-.22-.5-.5S.22,0,.5,0H1.76c1.24,0,2.31,.93,2.48,2.16l.26,1.84h6.01c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H4.63l1.25,9h12.78c1.66,0,3.11-1.18,3.43-2.81l.88-4.39c.09-.44-.03-.9-.31-1.25-.29-.35-.71-.55-1.16-.55h-5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c.75,0,1.46,.33,1.93,.92,.48,.58,.67,1.34,.52,2.08Zm-14.95,15.01c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm-1,0c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm11,0c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm-1,0c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1ZM10.34,7.63c-.2-.19-.52-.17-.71,.03-.19,.2-.17,.52,.03,.71l2.07,1.9c.49,.49,1.13,.73,1.77,.73s1.27-.24,1.75-.72l2.09-1.91c.2-.19,.22-.5,.03-.71-.19-.2-.5-.22-.71-.03l-2.1,1.93c-.16,.16-.36,.28-.56,.35V.5c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5V9.91c-.21-.07-.41-.2-.58-.36l-2.09-1.91Z" /></svg>
                <span className="bg-teal-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-3 bottom-3">
                    2
                </span>
            </div>
            {useStore.isOpen && (
                <div onClick={() => useStore.toggleCart()} className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50">
                    <div onClick={(e) => e.stopPropagation()} className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll">                     
                        <h1>Meu Carrinho</h1>
                        {
                            useStore.cart.map(item => (
                                <div key={item.id}>{item.name}</div>
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    );
}