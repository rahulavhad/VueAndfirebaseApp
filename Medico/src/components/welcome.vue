<template>
  <div class="welcome">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">LOGO</a>
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">HOME</a></li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">NEWS <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                                <li><a href="#">Page 1-4</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">FEATURES <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                                <li><a href="#">Page 1-4</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">DEMOS<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
         <div class="welcome">
            <h1>This is a Medical Care For All</h1>
            <p>Medico is an admirable, stunning, marvellous, robust, and of the great free medical WordPress themes. It offers you an excellent template with full width, right and left sidebar, and responsive layout. For medical and health professionals, it’s a wonderful theme. If you want to health & medical WordPress theme free download, choose Health Press. The retina ready graphics will allow you visualize your contents on high-resolution screens. You can add a banner on the front page along with featured services and anything else important.</p>
            <button v-on:click='logout'>Log Out</button>
            <router-link to="/signup" tag="button">Sign up</router-link>
            <router-link to="/login" tag="button">Log In</router-link>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'welcome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Rahul Avhad'
    }
  },
  methods: {
    logout: function (event) {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
