// import { addToCart, cart, loadFromStorage, removeFromCart } from "../../data/cart.js";
import { cart } from "../../data/cart-class.js";

describe('test suite: addToCart', () => {
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });

    it('adds an existing product to the cart', () => {
        // spyOn(localStorage, 'setItem');
        /*
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();
        */
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }];

        cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1);
        expect(cart.cartItems.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(2);

        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        }]));
    });

    it('adds a new product to the cart', () => {
        // spyOn(localStorage, 'setItem');
        /*
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();
        */
        cart.cartItems = [];

        cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1);
        expect(cart.cartItems.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(1);

        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }]));
    });
});

describe('test suite: removeFromCart', () => {
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });

    it ('remove a product from the cart', () => {
        /*
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();
        */
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }];

        cart.removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems.length).toEqual(0);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([]));
    });

    it ('does nothing if product is not in the cart', () => {
        /*
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();
        */
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }];

        cart.removeFromCart('does-not-exist');
        expect(cart.cartItems.length).toEqual(1);
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }]));
    })
});