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
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
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
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
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
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
</v-row>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 1,
      items: [
        { text: '4230', icon: 'mdi-bus-side' },
        { text: '4232', icon: 'mdi-bus-side' },
        { text: '4006', icon: 'mdi-bus-side' },
        { text: '4202', icon: 'mdi-bus-side' },
        { text: '4251', icon: 'mdi-bus-side' },
        { text: '4251', icon: 'mdi-bus-side' },
      ],
    }),
  }
</script>