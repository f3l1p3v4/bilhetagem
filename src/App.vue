<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
      stateless
    >
      <v-list dense nav>
          <v-list-item class="px-2">
            <v-list-item-avatar color="#2b3137" size="28">
              <v-icon dark>
               mdi-account
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                Felipe Valdez
              </v-list-item-title>
              <v-list-item-subtitle>Bilhetagem</v-list-item-subtitle> 
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark clipped-left color="#2b3137">
       <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">
        Bilhetagem&nbsp;
        <span class="font-weight-light">Consórcio</span>
      </span>
    </v-app-bar>

    <v-main class="blue-grey lighten-5">
      <Form />
      <List />
    </v-main>

    <v-footer color="white">
      <v-col class="text-center">
        &copy; 2020/{{ new Date().getFullYear() }} — Copyright. Site desenvolvido por
        <strong>Felipe Valdez 🚀</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Form from './components/Form';
import List from './components/List';

  export default {
    components: {
      Form,
      List
    },
    data: () => ({
      drawer: null,
      mini: true,
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
      items: [
      {
        title: "Home",
        icon: "mdi-home",
        route: "/"
      },
      {
        title: "Usuários",
        icon: "mdi-account",
        route: "/users"
      },
      {
        title: "Produtos",
        icon: "mdi-archive",
        route: "/products"
      },
    ]
    }),
  }
</script>
