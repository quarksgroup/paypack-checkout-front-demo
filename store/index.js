let cart = window.localStorage.getItem("mycart");
let comp = window.localStorage.getItem("compare");

export const state = () => ({
  // auth
  user: null,
  orders: [],
  cart: [],
  buynow: {},
  compare: comp ? JSON.parse(comp) : [],
});

export const getters = {
  getUser(state) {
    return state.user;
  },
  orders(state) {
    return state.cart;
  },
  compareCount(state) {
    return state.compare.length;
  },
  cartCount(state) {
    return state.cart.length;
  },
  cart(state) {
    return state.cart;
  },
  buynow(state) {
    return state.buynow;
  },
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  fecthProduct(state, product) {
    let found = state.cart.find((item) => item.id == product.id);
    if (!found) {
      state.cart.push(product);
    }
    this.commit("saveData");
  },
  saveData(state) {
    window.localStorage.setItem("mycart", JSON.stringify(state.cart));
  },
  removeData(state, product) {
    let index = state.cart.indexOf(product);
    state.cart.splice(index, 1);
    this.commit("saveData");
  },
  ADD_TO_COMPARE(state, product) {
    state.compare.push(product);
  },
  SET_CART(state, cart) {
    state.cart = cart;
  },
  SET_BUY_NOW(state, buynow) {
    state.buynow = buynow;
  },
  REMOVE_COMPARE(state, product) {
    state.compare = state.compare.filter((item) => {
      return item.id != product.id;
    });
  },
  INCREMENT_PRODUCT_QUANTITY(state, id) {
    state.cart.forEach((cart) => {
      if (cart.id == id) {
        cart.quantity += 1;
      }
    });
  },
  DECREMENT_PRODUCT_QUANTITY(state, id) {
    state.cart.forEach((cart) => {
      if (cart.id == id && cart.quantity > 1) {
        cart.quantity -= 1;
      }
    });
  },
  REMOVE_PRODUCT_FROM_CART(state, id) {
    state.carts.slice(id, 1);
  },
};

export const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // claims = null
      // Perform logout operations
      state.commit("SET_USER", null);

      //redirect from here
      this.$router.push({
        path: "auth/signin",
      });
    } else {
      // Do something with the authUser and the claims object...
      const { uid, email } = authUser;
      state.commit("SET_USER", {
        uid,
        email,
      });
    }
  },
  compareProduct(vuexContext, product) {
    vuexContext.commit("ADD_TO_COMPARE", product);
  },
  setCartData(vuexContext, cart) {
    vuexContext.commit("SET_CART", cart);
  },
  setBuyNowData(vuexContext, buynow) {
    vuexContext.commit("SET_BUY_NOW", buynow);
  },
  removeCompare(vuexContext, product) {
    vuexContext.commit("REMOVE_COMPARE", product);
  },
  incrementProductQuantity(vuexContext, id) {
    vuexContext.commit("INCREMENT_PRODUCT_QUANTITY", id);
  },
  decrementProductQuantity(vuexContext, id) {
    vuexContext.commit("DECREMENT_PRODUCT_QUANTITY", id);
  },
  removeProductFromCart(vuexContext, id) {
    vuexContext.commit("REMOVE_PRODUCT_FROM_CART", id);
  },
};
