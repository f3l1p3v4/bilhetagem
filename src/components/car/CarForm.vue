<template>
    <div>
        <Form>
            olá
        </Form>
    </div> 
</template>

<script>
import Form from '../base/Form';

export default {
    name: 'CarForm',
    props: {
        formModel: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            innerFormModel: null
        }
    },
    components: {
        Form
    }
}
</script>