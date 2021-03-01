<template>
  <q-page padding>
    <CarForm :form-model="formModel" />
  </q-page>
</template>

<script>
import CarForm from '../components/car/CarForm.vue'
export default {
  name: 'CarFormPage',
  props: {
    formModel: {
      type: Object,
      required: true
    }
  },
  components: {
    CarForm
  }
}
</script>