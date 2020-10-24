<template>
<v-row>
  <v-col
    cols="12"
    md="4"
  >
    <v-card
      class="mx-auto"
      max-width="300"
      tile
      elevation="11"
    >
      <v-list rounded>
        <v-subheader>FICHAS DO DIA</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(dayFile, i) in dayFiles"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon>mdi-bus-side</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="`${dayFile.bus} - ${dayFile.group}`"></v-list-item-title>
            </v-list-item-content>
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
      tile
      elevation="11"
    >
      <v-list rounded>
        <v-subheader>PLANOS DO DIA</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(dayplan, i) in dayPlans"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon>mdi-bus-side</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="dayplan.bus"></v-list-item-title>
            </v-list-item-content>
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
      tile
      elevation="11"
    >
      <v-list rounded>
        <v-subheader>PEDIR</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="green"
        >
          <v-list-item
            v-for="(as, i) in ask"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon>mdi-bus-side</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="`${as.bus} - ${as.group}`"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
</v-row>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";

export default {
  data: () => ({
    selectedItem: 1,
    dayFiles: [],
    dayPlans: [],
    ask: []
  }),
  methods: {
    searchDayFiles() {
      HttpRequestUtil.filterBushes("FICHAS DO DIA").then(response => {
        this.dayFiles = response;
      });
    },

    searchDayPlans() {
      HttpRequestUtil.filterBushes("PLANOS DO DIA").then(response => {
        this.dayPlans = response;
      });
    },

    searchAsk() {
      HttpRequestUtil.filterBushes("PEDIR").then(response => {
        this.ask = response;
      });
    },
  },
  mounted() {
    this.searchDayFiles();
    this.searchDayPlans();
    this.searchAsk();
  }
}
</script>