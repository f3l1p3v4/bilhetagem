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
          <v-list-item v-for="item in items" :key="item.title" router :to="item.route" @click="drawer = !drawer">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
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
      <router-view />
    </v-main>

    <v-footer color="white">
      <v-col class="text-center text-caption">
        &copy; 2020/{{ new Date().getFullYear() }} — Copyright. Direitos reservados.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
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
        title: "Materias",
        icon: "mdi-archive",
        route: "/material"
      },
    ]
    }),
  }
</script>
