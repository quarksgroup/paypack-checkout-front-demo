<template>
  <div class="hero">
    <div class="breadcumb px-md-16">
      <div dark d-flex class="bread-wrapper px-16">
        <nuxt-link class="breadcumb" to="/">Home</nuxt-link>
        <v-icon class="breadcumb">mdi-chevron-right</v-icon>
        <span class="breadcumb" style="color: #039be5">Checkout</span>
      </div>
    </div>
    <div class="main px-5 px-md-16">
      <div class="header">
        <h1 style="color: #153a5b">Check Out</h1>
      </div>
      <v-row reverse>
        <v-col cols="12" md="6">
          <div class="px-md-16 my-10 cart">
            <h3>Payment Method</h3>
            <div class="pay-image py-3">
              <div :class="{ active: activeOne }" @click="payActiveOne" class="mb-2">
                <v-avatar class="profile" color="" size="70" tile>
                  <img src="~assets/images/app_logo.png" />
                </v-avatar>
              </div>

              <!-- <div :class="{ active: activeTwo }" @click="payActiveTwo" class="mb-2">
                <v-avatar class="profile avatar-image" color="" size="70" tile>
                  <img src="~assets/images/visa.png" />
                </v-avatar>
              </div> -->
              <!-- <div :class="{ active: activeThree }" @click="payActiveThree" class="mb-2">
                <v-avatar class="profile avatar-image" color="" size="70" tile>
                  <img src="~assets/images/tigo.png" />
                </v-avatar>
              </div> -->
            </div>
            <div v-if="activeOne">
              <v-row class="py-3">
                <v-col md="6" cols="12">
              <Span class="mb-2" style="font-weight: bold">Enter Email</Span>
                  <v-text-field class="mt-1" outlined dense v-model="mtn" @input="payWithMtn" type="tel"></v-text-field>
                  <!-- {{mtn}} -->
                  {{pay_mode}}
                </v-col>
                <v-col md="6" cols="12">
                    <Span class="mb-2" style="font-weight: bold">Enter Tel Number</Span>
                  <v-text-field class="mt-1" outlined dense v-model="mtn" @input="payWithMtn" type="tel"></v-text-field>
                  <!-- {{mtn}} -->
                  {{pay_mode}}
                </v-col>
              </v-row>
            </div>
            <div v-else-if="activeTwo">
              <Span class="" style="font-weight: bold">Enter Card Number</Span>
              <v-row class="py-3">
                <v-col md="6">
                  <v-text-field outlined dense v-model="card" @input="payWithCard"></v-text-field>
                  <!-- {{card}} -->
                  {{pay_mode}}
                </v-col>
              </v-row>
            </div>
            <div v-else>
              <Span class="" style="font-weight: bold">Enter Tigo/Airtel Number</Span>
              <v-row class="py-3">
                <v-col md="6">
                  <v-text-field outlined dense v-model="tigo" @input="payWithTigo" type="tel"></v-text-field>
                  {{pay_mode}}
                </v-col>
              </v-row>
            </div>
            <div>
                <v-row>
                    <v-col md="4">
                        <v-btn block dark color="#D90368">Complete order</v-btn>
                        
                    </v-col>
                </v-row>
                <!-- {{payWith}} -->
            </div>
          </div>
          <v-btn class="" style="margin-top:-50px !important;" color="#E7E7E7" nuxt to="/">Continue Shopping</v-btn>
        </v-col>
        <v-col cols="12" md="6" order="first">
          <div class="px-md-16 my-10 cart " style="color:#153a5b">
            <h1 class="md-text-center">Summary</h1>
            <div class="py-5">
                <h3>Products</h3>
                <div>
                    <v-row  class="pl-2 pl-md-5">
                        <v-col md="">
                            <p> hi </p>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col md="">
                            <p> 0Rwf</p>
                        </v-col>
                    </v-row>
                    <v-row style="color:#D90368" class="">
                        <v-col md="">
                            <h3>SubTotal</h3>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col md="">
                            <p> 0 Rwf</p>
                        </v-col>
                    </v-row>
                    <v-row >
                        <v-col >
                            <h3>Total Shipping</h3>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col  class="">
                            <p>1500Rwf</p>
                        </v-col>
                    </v-row>
                    <v-divider class="my-4"></v-divider>
                    <v-row>
                        <v-col>
                            <h2>Grand Total</h2>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col>
                            <p>   150Rwf </p>
                        </v-col>
                    </v-row>
                </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Complete Order",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Single product page for PayPack Market Place",
        },
      ],
      script: [
        {
        //   src: "/js/swipe.js",
        },
      ],
    };
  },

  data() {
    return {
      text: "",
      activeOne: true,
      activeTwo: false,
      activeThree: false,
      mtn:"",
      tigo:"",
      card:"",
      payWith:"",
      icon: "mdi-checkbox-marked-circle",
      snackbar: false,
      products: [],
      nproducts: "",
      product: "",
      pay_mode: "",

      prodBackgroundColor: "#111",
    };
  },
  components: {},
  computed:{
        
        buynow() {
            return this.$store.getters.buynow
        }
    },

  created() {
    this.initialize();
  },

  methods: {
    
    showImg(pic) {
      let bigImg = document.querySelector(".big-img img");
      console.log(bigImg);
    },
    
    addtocart(product) {
      product.nproducts = this.nproducts;
      this.$store.commit("fecthProduct", product);
      this.text = "Successfull Added to cart";
      this.snackbar = true;
    },
    decrement() {
      if (this.nproducts < 1) {
        this.nproducts = 1;
      } else {
        this.nproducts--;
      }
    },
    increment() {
      this.nproducts++;
    },

    initialize() {
      this.products = [];
      this.nproducts = 1;
    },
    payActiveOne() {
      this.activeThree = false;
      this.activeTwo = false;
      this.activeOne = true;
      this.payWith = this.mtn
      this.pay_mode= "mtn"
    },
    payActiveTwo() {
      this.activeThree = false;
      this.activeOne = false
      this.activeTwo = true;
      this.payWith = this.card
      this.pay_mode = "card"
    },
    payActiveThree() {
      this.activeTwo = false;
      this.activeOne = false;
      this.activeThree = true;
      this.payWith = this.tigo
      this.pay_mode = "tigo"
    },
    payWithMtn() {
      this.payWith = this.mtn
    },
    payWithCard() {
      this.payWith = this.card
    },
    payWithTigo() {
      this.payWith = this.tigo
    },
    
  },
  layout: "",
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.hero {
  padding-top: 60px;
  @media screen and(max-width:678px) {
    padding: 115px 0 0 0;
  }
}
.breadcumb {
  background: #cdd6dd;
  color: #000000;
  font-weight: bold;
  font-size: 1.3rem;
}
.breadcumb span {
  font-weight: 500;
}
.bread-wrapper {
  padding: 15px 0;
}
.main {
  background: #e5e5e5;
  padding: 50px 0;
}
.cart {
  background: #fefeff;
  padding: 30px 30px;
  border-radius: 5px;
}
table thead {
  font-weight: 700;
}
.pay-image {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:678px) {
    flex-direction: column;
    gap: 3;
    justify-content: space-between;
  }
}
.pay-image > div {
  border: 1px solid #e5e5e5;
  padding: 5px 20px;
  cursor: pointer;
}
.pay-image .active {
  border: 2px solid #D90368;
}

</style>
