const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      curentTab: "dishes",
      language: undefined,
      cart: []
    },

    actions: {
      setCurrentTab: (tab) => {
        setStore({ currentTab: tab });
        console.log(`Current tab set to ${tab}`);
      },
    setLanguage: (language) => {
      setStore({ language: language });
      console.log(`Language set to ${language}`);
    },
    addItemToCart: (item) => {
      const store = getStore();
      const cart = [...store.cart]; // Create a copy of the cart array

      // Check if the item already exists in the cart
      const existingItemIndex = cart.findIndex(cartItem => cartItem.nameSpanish === item.nameSpanish);

      if (existingItemIndex !== -1) {
        // If the item exists, increment the quantity
        cart[existingItemIndex].quant += 1;
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        cart.push({ ...item, quant: 1 });
      }

      setStore({ cart: cart });
      console.log(`Item added to cart: ${item.nameSpanish}`);
      console.log(`el carro va así:`, getStore().cart);
    },
  }}
};

export default getState;