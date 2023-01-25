<template>
  <div class="hero">
    <div class="breadcumb">
      <div dark d-flex class="bread-wrapper px-16">
        <nuxt-link class="breadcumb" to="/">Home</nuxt-link>
        <v-icon class="breadcumb">mdi-chevron-right</v-icon>
        <span class="breadcumb" style="color: #039be5" dark> Home </span>
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
                  v-for="(image, i) in product.images"
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
                      <img
                        :src="image"
                        alt="John"
                        class=""
                      />
                    </v-avatar>
                  </div>
                </v-item>
              </v-item-group>

              <v-col class="bg-primary">
                <v-window v-model="window" class="elevation-1" vertical>
                  <v-window-item
                    v-for="(image, index) in product.images"
                    :key="`image` + index"
                  >
                    <v-card flat class="bg-primary">
                      <!-- :src="require('~/assets/images/product6.png')" -->
                      <v-card-text>
                        <v-img
                          max-height="350"
                          max-width="450"
                          :src="image"
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
                  v-for="(image, index) in product.images"
                  :key="`card-${index}`"
                >
                  <v-card color="#e5e5e5">
                    <v-card-text>
                      <v-img
                        max-height="350"
                        max-width="450"
                        :src="image"
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
                    v-for="(image, i) in product.images"
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
              <h1 style="color: #2e294e; margin-bottom: 10px" class="name">
                {{product.name}}
              </h1>
              <p style="color: #2e294e; display: flex; font-size: 12px">
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
                <span>
                  <a href="#reviews" style="color: #2e294e"
                    ><v-icon small color="#2E294E">mdi-forum</v-icon> Read
                    Review(1)
                  </a></span
                >
              </p>
              <p style="color: #2e294e; font-weight: bold; font-size: 18px">
                <v-icon color="#2E294E">mdi-store-outline</v-icon>
                store_name
              </p>
              <p style="color: #2e294e; font-weight: bold; font-size: 18px">
                {{product.price}} Rwf
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
                <span style="color: #2e294e; font-weight: bold; font-size: 14px"
                  >( {{ product.stock - item }} )In Stock</span
                >
              </p>

              <v-btn color="#D90368" dark small class="my-5" @click="BuyNow" :loading="state.buyloading"
                >Buy Now</v-btn
              >

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

      <section id="reviews">
        <div class="wrapper px-md-16 pt-10">
          <input type="radio" name="slider" checked id="description" />
          <input type="radio" name="slider" id="review" />
          <nav class="nav-desc px-4">
            <label for="description" class="description">Descriptions</label>
            <label for="review" class="review">Reviews(1)</label>
            <div class="slider"></div>
          </nav>
          <section class="px-4">
            <div class="content content-2">
              <p>
                {{product.description}}
              </p>
            </div>
            <div class="content content-3">
              <p>
                {{product.review}}
              </p>
            </div>
          </section>
        </div>

        <div class="divide px-16 py-5">
          <v-divider class=""></v-divider>
        </div>
      </section>
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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Single product page for PayPack Market Place',
        },
      ],
      script: [{}],
    }
  },

  data() {
    return {
      icon: 'mdi-checkbox-marked-circle',
      product: {},
      nproducts: '',
      product: '',
      rating: 3,
      model: null,
      item: 1,
      lists: [],
      catMatch: 'product name',
      length: 3,
      window: 0,
      onboarding: 0,
      indeterminate: false,
      snackbar: false,
      snackbar2: false,
      response: {},
      multiLine: true,
      nosimilar: false,
      text: `Hello, I'm a snackbar`,
      text2: `Hello, I'm a snackbar`,
      prodBackgroundColor: '#111',
      state: {
        buyloading:false
      },
    }
  },
  components: {},
  computed: {
    small() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return true
        case 'sm':
          return true
        case 'md':
          return false
        case 'lg':
          return false
        case 'xl':
          return false
      }
    },
  },

  created() {
    this.fetchProduct()
  },

  methods: {
    async fetchProduct() {
      
      const id =1;
      try {
        const data = await this.$axios.get(`products/${id}`)
        // console.log("single product", data.data);
        this.product = data.data
        console.log('single product', this.product)
      } catch (error) {
        console.log(error)
      }
    },

    async BuyNow() {
      const id = "session_id"
      var prod = {};
      prod.name = this.product.name
      prod.price = this.product.price
      prod.quantity = this.item
      prod.session_id = id
      prod.image_url = this.product.images[0]
      try {
        this.state.buyloading = true
        const data = await this.$axios.post(`checkout`, prod);
        this.response = data.data
        console.log("response", data);
      } catch (error) {
        console.log("error", error);
      }
      finally {
        console.log("data urls", this.response);
        // window.open(this.response.payment_link);
        window.location.replace(this.response.payment_link)
        // window.location.href = this.response.payment_link;
        this.state.buyloading = false;
      }
      // this.$store.dispatch("setBuyNowData", prod);
      // this.$router.push('/checkout')
      // const storedBlogs = JSON.parse(localStorage.getItem('links'));
    },

    decrement() {
      if (this.item < 1) {
        this.nproducts = 1
      } else {
        this.item--
      }
    },
    increment() {
      this.item++
    },

    initialize() {
      this.products = []
      this.nproducts = 1
    },
   
  },
  layout: '',
}
</script>

<style lang="scss" scoped>
html {
  scroll-behavior: smooth !important;
}
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
  border: 1px solid #2e294e;
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
  border: 1px solid #d90368;
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
  background: #2e294e;
  padding: 5px 10px;
  border-radius: 5px;
}
.buttons span {
  background: #d90368;
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
  color: #2e294e;
  border: 1px solid #2e294e;
  padding: 2px 5px;
  border-radius: 5px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #2e294e;
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
  background: #d90368;
  border-radius: 3px;
}

.wrapper header {
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 20px;
}
.wrapper nav {
  position: relative;
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
  line-height: 50px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  color: #9a9a9a;
  border-bottom: 3px solid #9a9a9a;
  font-size: 1.3rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

#home:checked ~ nav label.home,
#description:checked ~ nav label.description,
#review:checked ~ nav label.review,
#policy:checked ~ nav label.policy,
#inquire:checked ~ nav label.inquire {
  color: #2e294e;
  border-bottom: 3px solid #d90368;
}

input[type='radio'] {
  display: none;
}
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
  border: 2px solid #2e294e;
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
