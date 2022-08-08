const state = () => ({
  orders: [
    /*
    { name: 'Crispy Chicken', price: 11.99, quantity: 1 },
    { name: 'Ultimate Bacon', price: 14.99, quantity: 2 },
    */
  ]
})

const mutations = {
  addItem(state, selectedItem) {
    const index = state.orders.findIndex((item) => {
      return item.name === selectedItem.name;
    });

    if (index === -1) {
      state.orders.push({
        name: selectedItem.name,
        price: selectedItem.price,
        quantity: 1,
      });
    } else {
      state.orders[index].quantity++;
    }
  },
  removeItem(state, selectedItem) {
    const index = state.orders.findIndex((item) => {
      return item.name === selectedItem.name
    });
    state.orders.splice(index, 1);
  }
};

const getters = {
  totalItems(state) {
    return state.orders.length;
  }
}

export default {
  state,
  mutations,
  getters,
};
