<!-- JS -->
<script>
import store from "../data/store.js";
import card from "./card.vue";
import cardImage from "./cardImage.vue";

export default {
    name: "PageFooter",
    components: {
        card,
        cardImage,


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
    <footer>
        <!-- titolo -->
        <h2 class=" text-center p-5">
            Latest News <span class="pb-4 bord">&</span> Our <span class="verdeAcqua">Blog</span>
        </h2>
        <!-- tre carte -->
        <div class="col-12 d-flex">
            <card v-for="card in store.cards" :card="card" />
        </div>
        <div class=""></div>
        <!-- primo bottone -->
        <button type="button" class="btn bg-black btn-lg text-white ">VEIW ALL POST</button>
        <!-- due carte -->
        <div class="col-12 centro padding-top ">
            <div class="pippo bg-black ">
                <p class="text-center text-white">Are You Ready?</p>
                <h3 class="text-center text-white">Start a New Project</h3>
                <div class="input-group mb-3">
                    <input type="email" class="form-control mt-5" placeholder="Enter Your Email Address"
                        aria-label="Enter Your Email Address" aria-describedby="button-addon2">
                    <button class=" btn-outline-secondary mt-5" type="button" id="button-addon2">SUBMIT</button>
                </div>
            </div>
            <div class="pippo verde">
                <p class="text-center text-white">What Are You Waiting for?</p>
                <h3 class="text-center text-white">Let's Talk About Work</h3>
                <button type="button" class="btn bg-black btn-lg text-white mt-5">START NOW</button>
            </div>
        </div>
        <!-- immagini pubblicità -->
        <div class="col-12 padding-t-b grigio">
            <cardImage v-for="img in store.images" :img="img" />
        </div>

        <div class="col-12 padding-t-b">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div>
        <div class="col-12 bg-black p-4">
            <div class="col-3">
                <span class="text-white">c 2020 PHLOX BUSINESS THEME</span>
            </div>
            <div class="col-7"></div>
            <div class="col-2">
                <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </div>

        </div>

    </footer>
</template>

<!-- CSS -->
<style scoped>
/* colori */
.verdeAcqua {
    color: rgb(1, 217, 166);
}

.verde {
    background-color: rgb(48, 220, 166);
}

.grigio {
    background-color: rgb(249, 249, 249);
}


/* ------------------------------ */
.bord {
    border-bottom: 0.2rem solid rgb(1, 217, 166);
}

.padding-top {
    padding-top: 10rem;
}

.padding-t-b {
    padding: 8rem 0;
}

.col-12 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: calc((100% - 5rem) / 3);
    margin: 0.7rem;
    border-radius: 0.5rem;
    padding-bottom: 10rem;
    border: none;
}

.btn {
    border-radius: 2rem;
    font-size: 0.8rem;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    margin: auto;
}

.pippo {
    width: calc((100% - 3rem) / 2);
    border-radius: 0.5rem;
    height: 17rem;
    margin: 0.7rem;
    padding: 2rem;
}

.centro {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.radius {
    border-radius: 2rem;
}

.form-control {
    font-size: 0.8rem;
    padding: 1rem 2rem;
}

.img {
    width: calc((100% - 3rem) / 6);
    margin: 0.5rem;
    padding: 2rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.col {
    width: calc((100% - 3rem) / 4);
    height: 10rem;
    padding: 2rem;
    background-color: red;
    border: 0.01rem solid white;
}
</style>