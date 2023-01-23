<template>
  <div>
      <v-footer color="#2E294E" class="footer">
          <div class="px-md-16 py-5">
          <div class="row ">
              
              <div class="col pl-md-16">
                  <div>
                      <h4>Policy</h4>
                  </div>
                  <br>
                  <div>
                      <p>Terms and condition</p>
                      <p>Privacy Policy</p>
                      <p>Return Policy</p>
                  </div>
                </div>
              <div class="col">
                  <div>
                      <h4>Contact Us</h4>
                  </div>
                  <br>
                  <div>
                      <p><a class="contact-link" href="">paypack@paypack.rw</a></p>
                      <p>KK 369st Kicukiro/Kigali</p>
                      <p><a class="contact-link" href="">+250788888888</a></p>
                  </div>
                </div>
              <div class="col">
                  <div>
                  <h4>My Account</h4>
                  </div>
                  <br>
                  <div>
                      <p><nuxt-link class="account-link" to="">signin</nuxt-link></p>
                      <p><nuxt-link class="account-link" to="">order history</nuxt-link></p>
                      <p><nuxt-link class="account-link" to="">whishlist</nuxt-link></p>
                  </div>
              </div>
              <div class="col">
                  <div>
                      <h4>News Letter</h4>
                  </div>
                  <br>
                  <div>
                      <p>
                          Get  the latest product trends  and
                        industry news straight to your inbox.
                      </p>
                      <div class="search_wrap search_wrap_1">
                            <div class="search_box">
                                <input type="text" class="input" placeholder="Your email">
                                <div class="btn btn_common">
                                    <!-- <i class="fas fa-search"></i> -->
                                    <span class="subscribe-text">Subscribe</span>
                                    <!-- <v-icon class="fas">mdi-magnify</v-icon> -->
                                </div>
                            </div>
                        </div>
                        <div class="icons">
                            <div class="icon-item">
                                <a href="">
                                    <v-icon dark>mdi-facebook</v-icon>
                                </a>
                            </div>
                            <div class="icon-item">
                                <a href="">
                                    <v-icon dark>
                                    mdi-instagram
                                </v-icon>
                                </a>
                            </div>
                            <div class="icon-item">
                                <a href="">
                                    <v-icon dark>
                                        mdi-twitter
                                    </v-icon>
                                </a>
                            </div>
                        </div>
                  </div>
              </div>
              
          </div>
          </div>
          
      </v-footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: #fff;
}
.footer {
    color: #fff;
}



.contact-link {
    color: #fff;
}
.contact-link:hover {
    color: #D90368;
}

.account-link {
    color: #fff;
}
.account-link:hover {
    color: #D90368;
}

//newsletter


.search_wrap{
	width: 300px;
}

.search_wrap .search_box{
	position: relative;
	width: 300px;
	height: 36px;
}
.input{
    background: #E5E5E5;
    border-radius: 5px;
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
	width: 100px;
	height: 100%;
	background: #D90368;
    color: #fff;
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
.subscribe-text {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
}
.icons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon-item {
    margin-right: 20px;
}
.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.row.col:last-child {
    flex-basis:40%
}
.row .col {
    flex-basis: 20%;
    @media screen and(max-width:678px) {
        flex-basis: 100%;
    }
}
</style>