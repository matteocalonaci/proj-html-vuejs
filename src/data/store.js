import { reactive } from 'vue';

const ilMioOggettone = {
cards:[
    {
        image:"../assets/images/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg",
        data: "May 24, 2018 by Alex",
        titolo:"Marketing Ideas",
    },
    {
        image:"../assets/images/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg",
        data: "May 24, 2018 by Alex",
        titolo:"Rest During Working Hours",
    },
    {
        image:"../assets/images/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg",
        data: "May 24, 2018 by Alex",
        titolo:"Develop Your Startup Idea",
    }, 
],

images:[
    {
        image:"../assets/images/client-1-2x.png",
    },
    {
        image:"../assets/images/client-3-2x.png",
    },
    {
        image:"../assets/images/client-4-2x.png",
    }, 
    {
        image:"../assets/images/client-5-2x.png",
    }, 
    {
        image:"../assets/images/client-7-2x.png",
    }, 
    {
        image:"../assets/images/client-9-2x.png",
    }, 
   
],


};

const iMieiDati = reactive(ilMioOggettone);

export default iMieiDati;