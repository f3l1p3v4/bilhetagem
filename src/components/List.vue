<template>
<v-row>
  <v-col
    cols="12"
    md="4"
  >
    <v-card
      class="mx-auto rounded"
      max-width="300"
      tile
      elevation="11"
    >
      <v-list>
        <v-subheader>FICHAS DO DIA</v-subheader>
          <v-list-group
            v-for="(dayFile, i) in dayFiles"
            :key="i"
          >
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon v-if="dayFile.status === 'finalizado'" color="green">mdi-bus-side</v-icon>
                <v-icon v-else-if="dayFile.status === 'execução'" color="primary">mdi-bus-side</v-icon>
                <v-icon v-else>mdi-bus-side</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-if="dayFile.status === 'finalizado'" :class="`green--text`" v-text="`${dayFile.bus} - ${dayFile.group}`"></v-list-item-title>
                <v-list-item-title v-else-if="dayFile.status === 'execução'" :class="`primary--text`" v-text="`${dayFile.bus} - ${dayFile.group}`"></v-list-item-title>
                <v-list-item-title v-else v-text="`${dayFile.bus}`"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item @click="changeExecution(dayFile)">
              <v-list-item-content>
                <v-list-item-title>Execução</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            
            <v-list-item @click="changeFinished(dayFile)">
              <v-list-item-content>
                <v-list-item-title>Finalizado</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
      </v-list>
    </v-card>
  </v-col>
    <v-col
    cols="12"
    md="4"
  >
    <v-card
      class="mx-auto rounded"
      max-width="300"
      tile
      elevation="11"
    >
      <v-list>
        <v-subheader>PLANOS DO DIA</v-subheader>
        <v-list-group
          v-for="(dayPlan, i) in dayPlans"
          :key="i"
        >
          <template v-slot:activator>
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
          </template>

          <v-list-item @click="changeExecution(dayPlan)">
            <v-list-item-content>
              <v-list-item-title>Execução</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item @click="changeFinished(dayPlan)">
            <v-list-item-content>
              <v-list-item-title>Finalizado</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-col>
    <v-col
    cols="12"
    md="4"
  >
    <v-card
      class="mx-auto rounded"
      max-width="300"
      tile
      elevation="11"
    >
      <v-list>
        <v-subheader>PEDIDOS</v-subheader>
        <v-list-group
          v-for="(as, i) in ask"
          :key="i"
        >
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon v-if="as.status === 'finalizado'" color="green">mdi-bus-side</v-icon>
              <v-icon v-else-if="as.status === 'execução'" color="primary">mdi-bus-side</v-icon>
              <v-icon v-else>mdi-bus-side</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-if="as.status === 'finalizado'" :class="`green--text`" v-text="`${as.bus} - ${as.group}`"></v-list-item-title>
              <v-list-item-title v-else-if="as.status === 'execução'" :class="`primary--text`" v-text="`${as.bus} - ${as.group}`"></v-list-item-title>
              <v-list-item-title v-else v-text="`${as.bus}`"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item @click="changeExecution(as)">
            <v-list-item-content>
              <v-list-item-title>Execução</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item @click="changeFinished(as)">
            <v-list-item-content>
              <v-list-item-title>Finalizado</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
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
    ask: []
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
    }
  },
  mounted() {
    this.searchDayFiles();
    this.searchDayPlans();
    this.searchAsk();
  }
}
</script>