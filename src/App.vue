<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-info ">
      <router-link :to="{name: 'Home'}" class="navbar-brand">Gregslist</router-link>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{name: 'Car'}"
              >Cars <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Jobs</a>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" :to="{name: 'House'}">Houses <span class="sr-only">(current)</span></router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer class="container-fluid bg-info fixed-bottom">
    <div class="row">
      <div class="col text-center p-1 text-light">
        <p>Made with <img class="logo" src="./assets/logo.png" /> by Codeworks</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // background-image: url("https://images.unsplash.com/photo-1574079771556-f09a65db11e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1850&q=80");
}
main {
  flex-grow: 1;

}
.logo {
  height: 1rem;
}
</style>
