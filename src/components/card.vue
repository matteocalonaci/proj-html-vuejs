<!-- JS -->
<script>
import store from "../data/store.js";

export default {

    name: "card",

    props: {
        card: Object
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
    <div class="card col-2">
        <div class="img">
            <img src="../assets/images/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg">
        </div>

        <div class="testo bg-white m-auto ">
            <p class=" text-center p-2">{{ card.data }}</p>
            <h6 class=" text-center text-black p-2">{{ card.titolo }}</h6>
        </div>



    </div>
</template>

<!-- CSS -->
<style scoped>
img {
    width: 100%;
    border-radius: 0.5rem;

}

.testo {
    width: 25rem;
    position: absolute;
    top: 20rem;
    left: 2.5rem;
    border: 0.01rem solid black;
    border-radius: 0.5rem;
}

.testo p {
    font-size: 0.8rem;
    color: gray;
    margin-top: 2rem;
}
</style>