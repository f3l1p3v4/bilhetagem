<template>
<v-row style="width: 100%; max-width: 1200px; margin: 0 auto;">
  <v-col
    cols="12"
    md="4"
  >
    <v-card
      class="mx-auto"
      style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
      max-width="300"
      rounded="lg"
    >
      <v-list>
        <v-subheader>FICHAS DO DIA</v-subheader>
        
        <v-divider />

        <v-list-item-group>

          <v-list-item
            v-for="(dayFile, i) in dayFiles"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-if="dayFile.status === 'finalizado'" color="green">mdi-bus-side</v-icon>
              <v-icon v-else-if="dayFile.status === 'execução'" color="primary">mdi-bus-side</v-icon>
              <v-icon v-else>mdi-bus-side</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-if="dayFile.status === 'finalizado'" :class="`green--text`" v-text="`${dayFile.bus} - ${dayFile.group}`"></v-list-item-title>
              <v-list-item-title v-else-if="dayFile.status === 'execução'" :class="`primary--text`" v-text="`${dayFile.bus} - ${dayFile.group}`"></v-list-item-title>
              <v-list-item-title v-else v-text="`${dayFile.bus} - ${dayFile.group}`"></v-list-item-title>
            </v-list-item-content>

           <!-- <v-spacer></v-spacer> -->

            <v-menu
              bottom
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

            <v-list>

              <v-list-item
                @click="changeExecution(dayFile)"
                style="padding: 0 10px; height: 10px"
              >
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 grey--text text--darken-1">Executar</v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon style="margin: auto 5px">
                  <v-icon size="20">mdi-clock-time-four-outline</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item
                @click="changeFinished(dayFile)"
                style="padding: 0 10px; height: 10px"
              >
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 grey--text text--darken-1">Finalizar</v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon style="margin: auto 5px">
                  <v-icon size="20">mdi-check</v-icon>
                </v-list-item-icon>
              </v-list-item>

               <!-- <v-list-item
                  @click="edit(dayFile)"
                >
                  <v-list-item-content>
                    <v-list-item-title>Editar</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon size="20">mdi-pencil</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                -->
                <v-list-item
                  @click="remove(dayFile)"
                  style="padding: 0 10px; height: 10px"
                >
                  <v-list-item-content>
                    <v-list-item-title class="subtitle-2 grey--text text--darken-1">Excluir</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon style="margin: auto 5px">
                    <v-icon size="20">mdi-delete-empty-outline</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-list-item
                  @click="changeCategorieAsk(dayFile)"
                  style="padding: 0 10px; height: 10px"
                >
                  <v-list-item-content>
                    <v-list-item-title class="subtitle-2 grey--text text--darken-1">Pedir</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon style="margin: auto 5px">
                    <v-icon size="20">mdi-swap-horizontal</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
    <v-col
    cols="12"
    md="4"
  >
    <v-card
      class="mx-auto"
      max-width="300"
      rounded="lg"
      style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
    >
      <v-list>
        <v-subheader>PLANOS DO DIA</v-subheader>
        <v-divider />

            <v-list-item-group>

          <v-list-item
            v-for="(dayPlan, i) in dayPlans"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-if="dayPlan.status === 'finalizado'" color="green">mdi-bus-side</v-icon>
              <v-icon v-else-if="dayPlan.status === 'execução'" color="primary">mdi-bus-side</v-icon>
              <v-icon v-else>mdi-bus-side</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-if="dayPlan.status === 'finalizado'" :class="`green--text`" v-text="`${dayPlan.bus}`"></v-list-item-title>
              <v-list-item-title v-else-if="dayPlan.status === 'execução'" :class="`primary--text`" v-text="`${dayPlan.bus}`"></v-list-item-title>
              <v-list-item-title v-else v-text="`${dayPlan.bus}`"></v-list-item-title>
            </v-list-item-content>


           <!-- <v-spacer></v-spacer> -->

            <v-menu
              bottom
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

            <v-list>

              <v-list-item
                @click="changeExecution(dayPlan)"
                style="padding: 0 10px; height: 10px"
              >
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 grey--text text--darken-1">Executar</v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon style="margin: auto 5px">
                  <v-icon size="20">mdi-clock-time-four-outline</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item
                @click="changeFinished(dayPlan)"
                style="padding: 0 10px; height: 10px"
              >
                <v-list-item-content>
                  <v-list-item-title class="subtitle-2 grey--text text--darken-1">Finalizar</v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon style="margin: auto 5px">
                  <v-icon size="20">mdi-check</v-icon>
                </v-list-item-icon>
              </v-list-item>

               <!-- <v-list-item
                  @click="edit(dayPlan)"
                >
                  <v-list-item-content>
                    <v-list-item-title>Editar</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon size="20">mdi-pencil</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                -->
                <v-list-item
                  @click="remove(dayPlan)"
                  style="padding: 0 10px; height: 10px"
                >
                  <v-list-item-content>
                    <v-list-item-title class="subtitle-2 grey--text text--darken-1">Excluir</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon style="margin: auto 5px">
                    <v-icon size="20">mdi-delete-empty-outline</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
    <v-col
    cols="12"
    md="4"
  >
    <v-card
      class="mx-auto"
      max-width="300"
      rounded="lg"
      style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
    >
      <v-list>
        <v-subheader>PEDIDOS</v-subheader>
        <v-divider />
   <v-list-item-group>

          <v-list-item
            v-for="(a, i) in ask"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-if="a.status === 'finalizado'" color="green">mdi-bus-side</v-icon>
              <v-icon v-else-if="a.status === 'execução'" color="primary">mdi-bus-side</v-icon>
              <v-icon v-else>mdi-bus-side</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-if="a.status === 'finalizado'" :class="`green--text`" v-text="`${a.bus} - ${a.group}`"></v-list-item-title>
              <v-list-item-title v-else-if="a.status === 'execução'" :class="`primary--text`" v-text="`${a.bus} - ${a.group}`"></v-list-item-title>
              <v-list-item-title v-else v-text="`${a.bus} - ${a.group}`"></v-list-item-title>
            </v-list-item-content>


           <!-- <v-spacer></v-spacer> -->

            <v-menu
              bottom
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

            <v-list>

                <v-list-item
                  @click="remove(a)"
                  style="padding: 0 10px; height: 10px"
                >
                  <v-list-item-content>
                    <v-list-item-title class="subtitle-2 grey--text text--darken-1">Excluir</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon style="margin: auto 5px">
                    <v-icon size="20">mdi-delete-empty-outline</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-list-item
                  @click="changeCategorieFile(a)"
                  style="padding: 0 10px; height: 10px"
                >
                  <v-list-item-content>
                    <v-list-item-title class="subtitle-2 grey--text text--darken-1">Ficha</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon style="margin: auto 5px">
                    <v-icon size="20">mdi-swap-horizontal</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
  <!-- Loading -->
  <v-overlay :value="overlay">
    <v-progress-circular
      indeterminate
      size="64"
    ></v-progress-circular>
  </v-overlay>
</v-row>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";

export default {
  data: () => ({
    overlay: false,
    busCurrent: "",
    dayFiles: [],
    dayPlans: [],
    ask: [],
    selectedItem: 0,
    busEdit: null,
    itemss: [
      { text: '4252', icon: 'mdi-bus-side' },
      { text: '4245', icon: 'mdi-bus-side' },
      { text: '4222', icon: 'mdi-bus-side' },
    ],
  }),
  methods: {
    searchDayFiles() {
      HttpRequestUtil.filterBushes("Fichas do dia").then(response => {
        this.dayFiles = response;
      });
    },

    searchDayPlans() {
      HttpRequestUtil.filterBushes("Planos do dia").then(response => {
        this.dayPlans = response;
      });
    },

    searchAsk() {
      HttpRequestUtil.filterBushes("Pedidos").then(response => {
        this.ask = response;
      });
    },

    changeExecution(bus) {
      if (bus != "") {

        bus.status = "execução"

        HttpRequestUtil.changeStatus(bus).then(response => {
          console.log(response.bus);
          this.overlay = !this.overlay;
          window.location.reload();
        });

      }
    },

    changeFinished(bus) {
      if (bus != "") {

        bus.status = "finalizado"

        HttpRequestUtil.changeStatus(bus).then(response => {
          console.log(response);
          this.overlay = !this.overlay;
          window.location.reload();
        });
      }
    },

    remove(bus) {
      HttpRequestUtil.deleteBus(bus._id).then(response => {
        console.log(response)
        window.location.reload();
      });
    },

    //edit(bus) {
     // this.busEdit = bus;

     // HttpRequestUtil.changeStatus(bus).then(response => {
     //   console.log(response);
     //   this.overlay = !this.overlay;
     //   window.location.reload();
     // });
    //},

    changeCategorieFile(bus) {
      if (bus != "") {

        bus.categorie = "Fichas do dia"

        HttpRequestUtil.changeStatus(bus).then(response => {
          console.log(response);
          this.overlay = !this.overlay;
          window.location.reload();
        });
      }
    },

    changeCategorieAsk(bus) {
      if (bus != "") {

        bus.categorie = "Pedidos"

        HttpRequestUtil.changeStatus(bus).then(response => {
          console.log(response);
          this.overlay = !this.overlay;
          window.location.reload();
        });
      }
    },
  },
  mounted() {
    this.searchDayFiles();
    this.searchDayPlans();
    this.searchAsk();
  }
}
</script>