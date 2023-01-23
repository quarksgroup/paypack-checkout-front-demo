<template>
  <div class="hero">
    <div class="breadcumb">
      <div dark d-flex class="bread-wrapper px-16">
        <!-- <nuxt-link
          class="breadcumb"
          :to="{ name: 'stores-storeid', params: { storeid: 1 } }"
          >Home</nuxt-link
        > -->
        <nuxt-link class="breadcumb" to="/">Home</nuxt-link>
        <v-icon class="breadcumb">mdi-chevron-right</v-icon>
        <span class="breadcumb" style="color: #039be5" dark>
          {{ catMatch }}
        </span>
      </div>
    </div>
    <div class="main px-md-16 px-4">
      <v-row>
        <v-col cols="12" md="6">
          <div class="" v-if="!small">
            <v-row>
              <v-item-group
                v-model="window"
                class="shrink mr-0"
                mandatory
                tag="v-flex"
              >
                <v-item
                  v-for="(image, i) in 4"
                  :key="`image` + i"
                  v-slot="{ active, toggle }"
                  class=""
                >
                  <div class="bg-dar img-grp mb-4 mt-3">
                    <v-avatar
                      :input-value="active"
                      @click="toggle"
                      tile
                      size="70"
                      class=""
                    >
                      <img src="~assets/images/product6.png" alt="John" class="" />
                    </v-avatar>
                  </div>
                </v-item>
              </v-item-group>

              <v-col class="bg-primary">
                <v-window v-model="window" class="elevation-1" vertical>
                  <v-window-item
                    v-for="(image, index) in 4"
                    :key="`image` + index"
                  >
                    <v-card flat class="bg-primary">
                      <v-card-text>
                        <v-img
                          max-height="350"
                          max-width="450"
                          :src="require('~/assets/images/product6.png')"
                          contain
                        ></v-img>
                      </v-card-text>
                    </v-card>
                  </v-window-item>
                </v-window>
              </v-col>
            </v-row>
          </div>
          <div v-else>
            <v-card flat tile>
              <v-window v-model="onboarding" vertical>
                <v-window-item
                  v-for="(image, index) in 4"
                  :key="`card-${index}`"
                >
                  <v-card color="#e5e5e5">
                    <v-card-text>
                      <v-img
                        max-height="350"
                        max-width="450"
                        :src="require('~/assets/images/product6.png')"
                        contain
                      ></v-img>
                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>

              <v-card-actions class="justify-center">
                <v-item-group
                  v-model="onboarding"
                  class="text-center"
                  mandatory
                >
                  <v-item
                    v-for="(image, i) in 4"
                    :key="`btn-${i}`"
                    v-slot="{ active, toggle }"
                  >
                    <v-btn :input-value="active" icon @click="toggle">
                      <v-icon>mdi-record</v-icon>
                    </v-btn>
                  </v-item>
                </v-item-group>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div>
            <div>
              <h1 style="color: #2E294E; margin-bottom: 10px" class="name">
                {{ product.name }}
              </h1>
              <p style="color: #2E294E; display: flex; font-size: 12px">
                <span style="margin-right: 50px">
                  <v-rating
                    :value="0"
                    background-color="#2E294E"
                    color="#2E294E"
                    dense
                    half-increments
                    readonly
                    size="10"
                  ></v-rating>
                </span>
                <span
                  ><v-icon small color="#2E294E">mdi-forum</v-icon> Read
                  Review(4)</span
                >
              </p>
              <p style="color: #2E294E; font-weight: bold; font-size: 18px">
                <v-icon color="#2E294E">mdi-store-outline</v-icon>
                {{ store_name }}
              </p>
              <p style="color: #2E294E; font-weight: bold; font-size: 18px">
                {{ product.price }} Rwf
              </p>
              <p>
                <v-btn
                  class="mx-2"
                  fab
                  dense
                  small
                  color="##D8E8F5"
                  @click="decrement"
                >
                  <v-icon dark> mdi-minus </v-icon>
                </v-btn>
                <span style="font-size: 16px; font-weight: bold">
                  {{ item }}
                </span>
                <v-btn
                  class="mx-2"
                  fab
                  dense
                  small
                  color="##D8E8F5"
                  @click="increment"
                >
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
                <span style="color: #2E294E; font-weight: bold; font-size: 14px"
                  >( {{ product.quantity - item }} )In Stock</span
                >
              </p>
              <!-- <p style="font-weight: bold">color:white</p>
              <p style="margin-left: 20px">
                <span class="dot dot-one"></span>
                <span class="dot dot-two"></span>
                <span class="dot dot-three"></span>
                <span class="dot dot-four"></span>
              </p> -->
              <!-- <p class="buttons">
                <span @click="addToCart"
                  ><span v-if="!indeterminate">Add To Cart</span>
                  <v-progress-circular
                    v-else
                    :size="15"
                    color="light"
                    :indeterminate="indeterminate"
                  ></v-progress-circular>
                </span>
                <span @click="BuyNow">Buy Now</span>
              </p> -->
              <v-btn color="#D90368" dark small class="my-5" @click="BuyNow">Buy Now</v-btn>
              <!-- <p
                style="
                  color: #2E294E;
                  font-size: 12px;
                  padding-bottom: 20px;
                  cursor: pointer;
                "
              >
                <span style="margin-right: 20px"
                  ><v-icon small color="#2E294E">mdi-heart-outline</v-icon> Add
                  to Wishlist</span
                >
                <span @click="compare"
                  ><v-icon small color="#2E294E">mdi-weight-lifter</v-icon> Add
                  to Compare</span
                >
              </p> -->
              <p style="font-weight: bold" class="share-link">
                follow us
                <span><v-icon color="#2E294E">mdi-github</v-icon></span>
                <span><v-icon color="#2E294E">mdi-instagram</v-icon></span>
                <span><v-icon color="#2E294E">mdi-twitter</v-icon></span>
                <!-- <span>copy link</span> -->
              </p>
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="wrapper px-md-16 pt-10">
        <input type="radio" name="slider" checked id="description" />
        <input type="radio" name="slider" id="review" />
        <input type="radio" name="slider" id="policy" />
        <input type="radio" name="slider" id="inquire" />
        <nav class="nav-desc px-4">
          <label for="description" class="description">Descriptions</label>
          <label for="review" class="review">Reviews(4)</label>
          <label for="policy" class="policy">Store Policy</label>
          <label for="inquire" class="inquire">Inquire</label>
          <div class="slider"></div>
        </nav>
        <section class="px-4">
          <div class="content content-2">
            <p>
              {{ product.description }}
            </p>
          </div>
          <div class="content content-3">
            <p>
              Review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Iure, debitis nesciunt! Consectetur officiis, libero nobis dolorem
              pariatur quisquam temporibus.
            </p>
          </div>
          <div class="content content-4">
            <p>
              Store Policy Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Enim reprehenderit null itaq, odio repellat asperiores vel
              voluptatem magnam praesentium, eveniet iure ab facere officiis.
              Quod sequi
            </p>
          </div>
          <div class="content content-5">
            <p>
              Inquire Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur officia sequi aliquam. Voluptatem distinctio nemo
              culpa veritatis nostrum fugit
            </p>
          </div>
        </section>
      </div>

      <div class="divide px-16 py-5">
        <v-divider class=""></v-divider>
      </div>
      
    </div>
    
    <div>
      <v-snackbar v-model="snackbar" color="primary" :multi-line="multiLine">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-snackbar
        v-model="snackbar2"
        color="red accent-2"
        :multi-line="multiLine"
      >
        {{ text2 }}

        <template v-slot:action="{ attrs }">
          <v-btn color="primary" text v-bind="attrs" @click="snackbar2 = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      // title: this.titleProd || "Single Product",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Single product page for PayPack Market Place",
        },
      ],
      script: [
        {
          // src: "/js/swipe.js",
        },
      ],
    };
  },

  data() {
    return {
      icon: "mdi-checkbox-marked-circle",
      product: {},
      nproducts: "",
      product: "",
      rating: 3,
      model: null,
      item: 1,
      lists: [],
      catMatch: "product name",
      length: 3,
      window: 0,
      onboarding: 0,
      indeterminate: false,
      snackbar: false,
      snackbar2: false,
      multiLine: true,
      nosimilar: false,
      text: `Hello, I'm a snackbar`,
      text2: `Hello, I'm a snackbar`,
      prodBackgroundColor: "#111",
    };
  },
  components: {},
  computed: {
    small () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true
          case 'sm': return true
          case 'md': return false
          case 'lg': return false
          case 'xl': return false
        }
      },
    id() {
      return localStorage.getItem("product_id");
    },
    id2() {
      return this.$route.params.id
    },
    titleProd() {
      return (localStorage.getItem("product_name"));
    },
    store_name() {
      return localStorage.getItem("store_name");
    },
    Islogged() {
      const status = localStorage.getItem("islogged");
      const user = localStorage.getItem("user_name");

      console.log(status);
      // console.log("user info", user);
      if (user != null && status != null) {
        return true;
      } else {
        return false;
      }
    },
    
  },

  created() {
    this.fetchProduct();
  },

  methods: {
    async fetchProduct() {
      return
      console.log("single productid", this.id2);
      console.log("params", this.id);
      try {
        const data = await this.$axios.get(`products/find/${this.id2}`);
        // console.log("single product", data.data);
        this.catMatch = data.data.name;
        this.product = data.data;
        console.log("single product", this.product);
        this.fetchAlsoProduct();
      } catch (error) {
        console.log(error);
      }
    },

    async fetchAlsoProduct() {
      return
      try {
        const data = await this.$axios.get("products/list");
        console.log("id", this.id);
        this.lists = [];
        data.data.products.forEach((element) => {
          if (
            element.shop_id == this.product.shop_id &&
            element.category == this.product.category &&
            element.id != this.product.id
          ) {
            // this.shopProducts.push(element)

            // console.log("ellement", element);
            this.lists.push(element);
          } else {
            console.log("no products for this shop yet");
            this.nosimilar = true
          }
        });
      } catch (error) {
        console.log(error);
      }
    },

    // showImg(pic) {
    //   let bigImg = document.querySelector(".big-img img");
    //   console.log(bigImg);
    // },

    async addToCart() {
      if (this.Islogged) {
        console.log("product", this.product);
        console.log("quantity", this.item);
        const cart = {};
        cart.product_id = this.product.id;
        cart.quantity = this.item;
        // cart.cart_id = "6GLB03N59Q0H"

        try {
          this.indeterminate = true;
          const { response } = await this.$axios.post("cart-products/create", cart);
          this.text = "Successfully Added To Cart";
          this.snackbar = true;
          console.log("res", response);
        } catch (error) {
          console.log("err", error);
          this.text2 = "Failed Try again";
          this.snackbar2 = true;
        } finally {
          this.indeterminate = false;
        }
      } else {
        this.text2 = "You must login first";
        this.snackbar2 = true;
        console.log("you must loggin first");
        // this.$router.push("/auth/login");
      }
    },
    BuyNow() {
      // console.log("product", this.product);
      // var prod = {};
      // prod.item_req = this.item
      // prod.product = this.product
      // console.log("product", prod);
      // this.$store.dispatch("setBuyNowData", prod);
      this.$router.push("/checkout");
      // const storedBlogs = JSON.parse(localStorage.getItem('links'));
    },
    compare() {
      var compare = JSON.parse(localStorage.getItem("compare")) || [];
      console.log("comapre one", compare);
      compare.push(this.product);
      console.log("compare", compare);
      const compProduct = this.product
      this.$store.dispatch("compareProduct", {
        product: this.product
      });
      if (compare.length < 4) {
        localStorage.setItem("compare", JSON.stringify(compare));
        this.text = "Sucessfully Added To Compare";
        this.snackbar = true;
      } else {
        this.text2 = "You Can't Add More Than 3 Products";
        this.snackbar2 = true;
      }
    },

    addtocart(product) {
      product.nproducts = this.nproducts;
      this.$store.commit("fecthProduct", product);
      this.text = "Successfull Added to cart";
      this.snackbar = true;
    },
    decrement() {
      if (this.item < 1) {
        this.nproducts = 1;
      } else {
        this.item--;
      }
    },
    increment() {
      this.item++;
    },
    like(product) {
      console.log(product);
      this.$router.push(`/stores/${product.shop_id}/${product.id}`);
    },
    initialize() {
      this.products = [];
      this.nproducts = 1;
    },
    goBack() {
      console.log("go back");
      this.$router.go(-1);
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
  padding-top: 55px;
  @media screen and(max-width:678px) {
    padding-top: 115px;
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
.alo-like {
  background: #e5e5e5;
}
.avatar {
  border: 1px solid #2E294E;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  cursor: pointer;
}

.dot {
  height: 20px;
  width: 20px;
  margin-right: 5px;
  border-radius: 50%;
  display: inline-block;
}
.dot:first-child {
  border: 1px solid #D90368;
}
.dot:nth-child(2) {
  background: #3597d4;
}
.dot:nth-child(3) {
  background: #f067a1;
}
.dot:nth-child(4) {
  background: #d18a8a;
}
.buttons span {
  color: #fff;
  margin-right: 20px;
  cursor: pointer;
}
.buttons span:first-child {
  background: #2E294E;
  padding: 5px 10px;
  border-radius: 5px;
}
.buttons span {
  background: #D90368;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.share-link span {
  margin-right: 10px;
}
.share-link span:first-child {
  margin-left: 10px;
}
.share-link span:last-child {
  color: #2E294E;
  border: 1px solid #2E294E;
  padding: 2px 5px;
  border-radius: 5px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #2E294E;
}
.section-title .underline {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0;
}
.section-title .underline span {
  width: 130px;
  height: 4px;
  background: #D90368;
  border-radius: 3px;
}

.wrapper header {
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 20px;
}
.wrapper nav {
  position: relative;
  // width: 80%;
  // height: 50px;
  display: flex;
  align-items: center;
  @media screen and(max-width:468px) {
    flex-direction: column;
    align-items: flex-start;
  }
}
.wrapper nav label {
  display: block;
  margin-right: 30px;
  // height: 100%;
  // width: 100%;
  // text-align: center;
  line-height: 50px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  color: #9a9a9a;
  border-bottom: 3px solid #9a9a9a;
  font-size: 1.3rem;
  font-weight: bold;
  // border-radius: 5px;
  // margin: 0 5px;
  transition: all 0.3s ease;
}
// .wrapper nav label:hover{
//   background: rgba(23,162,184,0.3);
// }
#home:checked ~ nav label.home,
#description:checked ~ nav label.description,
#review:checked ~ nav label.review,
#policy:checked ~ nav label.policy,
#inquire:checked ~ nav label.inquire {
  color: #2E294E;
  border-bottom: 3px solid #D90368;
}
// nav label i{
//   padding-right: 7px;
// }
// nav .slider {
//   position: absolute;
//   height: 100%;
//   width: 40px;
//   left: 0;
//   bottom: 0;
//   z-index: 0;
//   border-radius: 5px;
//   border-bottom: 3px solid #FF8C32;
//   background: #17a2b8;
//   transition: all 0.3s ease;
// }
input[type="radio"] {
  display: none;
}
// #home:checked ~ nav .slider {
//   left: 0%;
// }
// #description:checked ~ nav .slider {
//   left: 0%;
// }
// #review:checked ~ nav .slider {
//   left: 16%;
// }
// #policy:checked ~ nav .slider {
//   left: 30%;
// }
// #inquire:checked ~ nav .slider {
//   left: 45.5%;
// }
section .content {
  display: none;
}
#home:checked ~ section .content-1,
#description:checked ~ section .content-2,
#review:checked ~ section .content-3,
#policy:checked ~ section .content-4,
#inquire:checked ~ section .content-5 {
  display: block;
}
section .content .title {
  font-size: 21px;
  font-weight: 500;
  padding-top: 20px;
  // margin: 30px 0 10px 0;
}
section .content p {
  text-align: justify;
  padding-top: 10px;
  width: 40%;
  @media screen and(max-width:468px) {
    width: 100%;
  }
}

.img-grp {
  border: 2px solid #2E294E;
  padding: 5px;
  cursor: pointer;
}
.bg-primary {
  background: #e5e5e5;
}
.also-card {
  cursor: pointer;
}
</style>
