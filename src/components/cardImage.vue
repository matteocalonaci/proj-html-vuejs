<!-- JS -->
<script>
import store from "../data/store.js";

export default {

    name: "cardImage",

    props: {
        images: Object
    },


    data() {
        return {
            store
        }
    },

    methods: {

    },




}
</script>

<!-- HTML -->
<template>

    <div class="img">
        <img src="../assets/images/client-1-2x.png" alt="">





    </div>
</template>

<!-- CSS -->
<style scoped>
.img {
    background-color: yellow;

}
</style>