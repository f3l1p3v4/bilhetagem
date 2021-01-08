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
          <v-list-item router to="/" @click="drawer = !drawer">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      <v-list-group
        :value="true"
        prepend-icon="mdi-ballot"
        color="grey darken-3"
      >
        <template v-slot:activator>
          <v-list-item-title>Materias</v-list-item-title>
        </template>
          <v-list-item
            class="ml-6"
            router to="/404" @click="drawer = !drawer"
          >
            <v-list-item-title>VCG</v-list-item-title>
          </v-list-item>
          <v-list-item
            class="ml-6"
            router to="/material" @click="drawer = !drawer"
          >
            <v-list-item-title>JTU</v-list-item-title>
          </v-list-item>
        </v-list-group>
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
    ],
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    }),
  }
</script>
