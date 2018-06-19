<template>
  <div class="hello">
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
                        <li><a href="#/">HOME</a></li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">NEWS <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">FEATURES <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                                <li><a href="#">Page 2-1</a></li>
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
<form class="form-horizontal" >
  <fieldset>
    <div id="app">
      <legend class="">Register</legend>
    </div>
    <div class="control-group">
      <!-- Username -->
      <label class="control-label"  for="username">Username</label>
      <div class="controls">
        <input type="text" id="username" name="username" v-model="newuser.username" placeholder="" class="input-xlarge">
        <p class="help-block">Username can contain any letters or numbers, without spaces</p>
      </div>
    </div>

    <div class="control-group">
      <!-- E-mail -->
      <label class="control-label" for="email">E-mail</label>
      <div class="controls">
        <input type="text" id="email" name="email" v-model="newuser.email" placeholder="" class="input-xlarge">
        <p class="help-block">Please provide your E-mail</p>
      </div>
    </div>

    <div class="control-group">
      <!-- Password-->
      <label class="control-label" for="password">Password</label>
      <div class="controls">
        <input type="password" id="password" v-model="newuser.password" name="password" placeholder="" class="input-xlarge">
        <p class="help-block">Password should be at least 4 characters</p>
      </div>
    </div>

    <div class="control-group">
      <!-- Password -->
      <label class="control-label"  for="password_confirm">Password (Confirm)</label>
      <div class="controls">
        <input type="password" id="password_confirm" name="password_confirm" v-model="newuser.confpassword" placeholder="" class="input-xlarge">
        <p class="help-block">Please confirm password</p>
      </div>
    </div>

    <div class="control-group">
      <!-- Button -->
      <div class="controls">
        <button class="btn btn-success" v-on:click="signup">Register</button>
      </div>
    </div>
  </fieldset>
</form>
        <div class="footer-copyright">
            <p>© 2017 Copyright To Rahul Avhad </p>
        </div>
    </footer>

   </section>
</div>
</div>
</template>
<script>
  import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyABxHAtkNty-QQJ_OEnlgk12llZR_YqQ90',
    authDomain: 'medico-ae818.firebaseapp.com',
    databaseURL: 'https://medico-ae818.firebaseio.com',
    projectId: 'medico-ae818',
    storageBucket: '',
    messagingSenderId: '617883555981'
  }
  // firebase.initializeApp(config)
  let app = firebase.initializeApp(config)
  let db = app.database()
  let booksRef = db.ref('users')
  console.log(booksRef)

export default {
    name: 'signup',
    data () {
      return {
        newuser: {
          email: '',
          password: '',
          username: '',
          confpassword: ''
        }
      }
    },

    methods: {
      signup: function (event) {
        var vm = this
        booksRef.push(this.newuser)
        this.newuser.email = ''
        this.newuser.username = ''
        this.newuser.password = ''
        this.newuser.confpassword = ''

        if (vm.email === '' || vm.password === '') {
          alert('Please provide the email and password')
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
