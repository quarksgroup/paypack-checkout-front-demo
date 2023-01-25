<template>
  <v-app>
    <div>
      <v-card class="fixed">
        <div class="main-nav py-2">
          <div class="logo">
            <nuxt-link class="nuxt-logo" to="/"
              ><span class="logo-title">Paypack</span> <br />Checkout
              Demo</nuxt-link
            >
          </div>
          <div class="nav-link">
            <div @click="Clickhome" class="text-link">
              <nuxt-link class="nav-item" id="home" to="/"
                ><span>Home</span>
                <div class="underline"></div>
                <div class="underline"><span></span></div>
              </nuxt-link>
            </div>
          </div>
          <div class="d-none d-md-block">
            <div class="search-main">
              <div class="text-center"></div>
              <div class="search_wrap search_wrap_1">
                <div class="search_box">
                  <input type="text" class="input" placeholder="search..." />
                  <div class="btn btn_common">
                    <!-- <i class="fas fa-search"></i> -->
                    <v-icon class="fas">mdi-magnify</v-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-md-none">
            <hr />
          </div>
          <div class="cart pt-4 mb-2 pt-md-0">
            <a
              href="https://quarksgroup.rw/"
              target="_blank"
              class="cart-rigth"
            >
              <v-icon>mdi-web</v-icon></a
            >
            <a
              href="https://github.com/quarksgroup/"
              target="_blank"
              class="cart-rigth"
            >
              <v-icon>mdi-github</v-icon></a
            >
            <a
              href="https://www.instagram.com/quarksgroup/?hl=en"
              target="_blank"
              class="cart-rigth"
            >
              <v-icon>mdi-instagram</v-icon></a
            >
            <a
              href="https://twitter.com/QuarksG"
              target="_blank"
              class="cart-rigth"
            >
              <v-icon>mdi-twitter</v-icon></a
            >
          </div>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
    isActive1: false,
    isActive2: false,
    logedIn: false,
    user: '',
    compareItems: '',
  }),
  head: {
    link: [],
    script: [{}],
  },
  computed: {},
  created() {},
  methods: {
    Clickhome() {
      console.log('clicked')
      this.isActive1 = true
      this.isActive2 = false
    },
  },
}
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  width: 100%;
  z-index: 10000000000000000;
  // @media screen and (max-width:468px) {
  //     width: 85%;
  // }
}
.sub-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
  @media screen and(max-width:678px) {
    justify-content: flex-start;
    align-items: center;
  }
}
.sub-nav div:nth-child(1) {
  margin-right: 50px;
  @media screen and(max-width:678px) {
    margin-right: 35px;
    margin-left: 10px;
  }
}
.button-btn {
  text-transform: capitalize !important;
}
.button-btn {
  text-transform: capitalize !important;
}
.one {
  font-size: 14px !important;
}
.call {
  color: #d90368;
}
.right {
  margin-right: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}
a {
  text-decoration: none;
}
.login-btn {
  color: #2e294e;
}
.right {
  color: #fff;
}
.register-btn {
  color: #fff;
  background: #d90368;
  padding: 5px 10px;
  border-radius: 5px;
}
.main-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media screen and(max-width:678px) {
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
  }
}
.nuxt-logo {
  color: #2e294e;
}
.logo-title {
  margin-left: 20px;
}
.nav-link {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media screen and(max-width:678px) {
    align-items: center;
  }
}

.nav-item {
  color: #2e294e;
  margin-left: 20px;
}
.nav-link .nuxt-link-exact-active {
  color: #d90368;
}
.nav-item a.nuxt-link-exact-active {
  color: #2e294e;
  margin-left: 20px;
}
.main-nav .nav-item a.nuxt-link-exact-active span {
  color: #d90368;
}
.main-nav .nav-link .text-link a.nuxt-link-exact-active .underline {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-nav .nav-link .text-link a.nuxt-link-exact-active .underline span {
  width: 0px;
  height: 0px;
  background: #d90368;
  border-radius: 3px;
  margin-left: 30px;
}

.menu-btn {
  border: 1px solid #e5e5e5;
  border-right: none;
  border-radius: 0;
  color: #2e294e;
  text-transform: unset !important;
  background: #e5e5e5;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

//search

.search-main {
  display: flex;
}
.search_wrap {
  width: 300px;
}

.search_wrap .search_box {
  position: relative;
  width: 300px;
  height: 36px;
}
.input {
  border: 1px solid #e5e5e5;
  // border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  outline: none;
  color: #2e294e;
}

.search_wrap .search_box .input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  font-size: 18px;
}

.search_wrap .search_box .btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;
  background: #e5e5e5;
  color: #2e294e;
  cursor: pointer;
}

.search_wrap .search_box .btn.btn_common .fas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #2e294e;
  font-size: 20px;
}

.search_wrap.search_wrap_1 .search_box .btn {
  right: 0;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.search_wrap.search_wrap_1 .search_box .input {
  padding-right: 80px;
}
.cart-rigth {
    margin-right: 20px;
}
</style>