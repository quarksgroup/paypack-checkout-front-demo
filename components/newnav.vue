<template>
<v-app>
  <div>
      <v-card class="fixed">

      
      <div class="main-nav py-2">
          <div class="logo"><nuxt-link class="nuxt-logo" to="/"><span class="logo-title">Paypack</span> <br>Checkout Demo</nuxt-link></div>
          <div class="nav-link">
              <div @click="Clickhome" class="text-link">
              <nuxt-link   class="nav-item  " id="home" to="/"><span>Home</span> <div class="underline"></div> <div class="underline"><span></span></div> </nuxt-link>
              </div>
              
          </div>
          <div class="d-none d-md-block">
            <div class="search-main">
                <div class="text-center">
                    
                </div>
                <div class="search_wrap search_wrap_1">
                    <div class="search_box">
                        <input type="text" class="input" placeholder="search...">
                        <div class="btn btn_common">
                            <!-- <i class="fas fa-search"></i> -->
                            <v-icon class="fas">mdi-magnify</v-icon>
                        </div>
                    </div>
                </div>
          </div>
          </div>
          <div class="d-md-none">
            <hr>
          </div>
          <div class="cart pt-4 mb-2 pt-md-0">
              <a href="" class="cart-rigth"> <v-icon>mdi-github</v-icon></a>
              <a href="" class="cart-rigth"> <v-icon>mdi-instagram</v-icon></a>
              <a href="" class="cart-rigth"> <v-icon>mdi-twitter</v-icon></a>
    
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
      logedIn : false,
      user: '',
      compareItems: "",
    }),
    head: {
        link: [
        
        // {
        //     rel: "stylesheet",
        //     href: "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css",
        // },
        ],
        script: [
        {
            // src: '/js/active.js'
        }
        ],
    },
    computed:{
        // compareCount() {
        //     return this.$store.getters.compareCount
        // },
        // cartCount() {
        //     return this.$store.getters.cartCount
        // }
    },
   created() {
    this.Islogged();
    // this.compareItemsLength();
   },
    methods: {
        Islogged () {
            return
            const status = localStorage.getItem("islogged");
            const user  = localStorage.getItem("user_name");
            this.user = user
            
            console.log(status);
            this.logedIn = status
            console.log("user info",user);
        },
        compareItemsLength() {
            return
            this.compareItems = this.$store.getters.compareCount
        },
        wish() {},
        compare() {
            this.$router.push('/compare')
        },
        cart() {
            this.$router.push('/cart')
        },
        Clickhome() {
            console.log("clicked");
            this.isActive1 = true
            this.isActive2 = false
        },
        Clickstores() {
            this.isActive1 = false
            this.isActive2 = true
        },
        async logout() {
            return
            localStorage.removeItem('user_token');
            localStorage.removeItem('user_refresh');
            localStorage.removeItem('user_role');
            localStorage.removeItem('user_info');
            localStorage.removeItem('user_name');
            localStorage.removeItem('islogged');
            this.logedIn = false
            this.Islogged()
            // localStorage.removeItem(user_token);
            // await this.$axios.post('logout').then(res => {
            //     console.log(res);
            // })
        }
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
.button-btn  {
    text-transform: capitalize !important;
}
.one {
    font-size: 14px !important;

}
.call {
    color: #D90368;
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
    color: #2E294E;
}
.right {
    color: #fff;
}
.register-btn {
    color: #fff;
    background: #D90368;
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
    color: #2E294E;
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
    color: #2E294E;
    margin-left: 20px;
}
.nav-link .nuxt-link-exact-active {
    color: #D90368;
}
.nav-item a.nuxt-link-exact-active {
    color: #2E294E;
    margin-left: 20px;
}
.main-nav .nav-item a.nuxt-link-exact-active span {
    color: #D90368;
}
.main-nav .nav-link .text-link a.nuxt-link-exact-active .underline  {
     display: flex;
  justify-content: center;
  align-items: center;
    // border-bottom: 2px solid #D90368;
    // border-block-start-color:  #D90368;
    // color: #D90368;
    // height: 10px;
    // width: 10px;
    // width: 30px;
    // height: 2px;
    // border-radius: 5px;
    // background: #D90368;
    // position: absolute;
    // top: 1;
    // left: 15px;
}
.main-nav .nav-link .text-link a.nuxt-link-exact-active .underline span  {
    width: 30px;
  height: 2.5px;
  background: #D90368;
  border-radius: 3px;
  margin-left: 30px;
    // border-bottom: 2px solid #D90368;
    // border-block-start-color:  #D90368;
    // color: #D90368;
    // height: 10px;
    // width: 10px;
    // width: 30px;
    // height: 2px;
    // border-radius: 5px;
    // background: #D90368;
    // position: absolute;
    // top: 1;
    // left: 15px;
}

// .text-link {
//     margin-top: 15px;
// }
// .nav-item.active1 {
//     position: relative;
//     color: #D90368;
// }
// .nav-item.active1 .underline{
//     width: 30px;
//     height: 2px;
//     border-radius: 5px;
//     background: #D90368;
//     position: absolute;
//     top: 25px;
//     left: 15px;

// }
// .nav-item.active2 {
//     color: #D90368;
//     position: relative;
// }
// .nav-item.active2 .underline{
//     width: 30px;
//     height: 2px;
//     border-radius: 5px;
//     background: #D90368;
//     position: absolute;
//     top: 25px;
//     left: 15px;

// }

// a.nuxt-link-active {
//   font-weight: bold;
// }
/* exact link will show the primary color for only the exact matching link */
// a.nuxt-link-exact-active {
//   color: #00c58e;
// }


// a,
// a:visited {
//   text-decoration: none;
//   color: inherit;
// }


// a.active {
//     color: #D90368;
// }






.menu-btn {
    border: 1px solid #E5E5E5;
    border-right: none;
    border-radius: 0;
    color: #2E294E;
    text-transform: unset !important;
    background: #E5E5E5;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}


//search

.search-main {
    display: flex;
}
.search_wrap{
	width: 300px;
}

.search_wrap .search_box{
	position: relative;
	width: 300px;
	height: 36px;
}
.input{
	border: 1px solid #E5E5E5;
    // border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
	outline: none;
	color: #2E294E;
}

.search_wrap .search_box .input{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 10px 20px;
	font-size: 18px;
}

.search_wrap .search_box .btn{
	position: absolute;
	top: 0;
	right: 0;
	width: 50px;
	height: 100%;
	background: #E5E5E5;
    color: #2E294E;
	cursor: pointer;
}

// .search_wrap .search_box .btn:hover{
// 	background: #708bd2;	
// }

.search_wrap .search_box .btn.btn_common .fas{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	color: #2E294E;
	font-size: 20px;
}

.search_wrap.search_wrap_1 .search_box .btn{
	right: 0;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
}

.search_wrap.search_wrap_1 .search_box .input{
	padding-right: 80px;
}
.cart {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
}

//cart

.cart-rigth {
    margin-top: 5px;
    margin-right: 35px;
    display: flex;
}
.cart-text {
    font-size: 12px;
    margin-top: 15px;
    color: #2E294E;
    cursor: pointer;
}
.cart-number {
    font-size: 10px;
    background: #2E294E;
    color: #fff;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10;
    margin-left: 30px;
    
}
//newsletter

</style>