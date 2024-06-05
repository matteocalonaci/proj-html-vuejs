import { reactive } from 'vue';

const ilMioOggettone = {

    
cards:[
    {
        image:"serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg",
        data: "May 24, 2018 by Alex",
        titolo:"Marketing Ideas",
    },
    {
        image:"Businessman-at-the-desk-in-his-office-resting--1024x768.jpg",
        data: "May 24, 2018 by Alex",
        titolo:"Rest During Working Hours",
    },
    {
        image:"simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg",
        data: "May 24, 2018 by Alex",
        titolo:"Develop Your Startup Idea",
    }, 
],

images:[
    {
        image:"client-1-2x.png",
    },
    {
        image:"client-3-2x.png",
    },
    {
        image:"client-4-2x.png",
    }, 
    {
        image:"client-5-2x.png",
    }, 
    {
        image:"client-7-2x.png",
    }, 
    {
        image:"client-9-2x.png",
    }, 
   
],

info: [
    {
        image: "cropped-Group-39-2x.png",
        didascalia: "While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.While the lovely valley teems with vapour around me."
    },
    {
        titolo: "QUICK LINKS",
        links: ["Careers", "News", "Termd of use", "Privacy Projects", "About", "Contact"]
    },
    {
        titolo: "CONTACT",
        indirizzo: " Patrivia C. Amadee 4401 Waldeck Street Grapevine Nashville, TX 76051 ",
        email: " info@yourdomain.com",
        cellulare: "+99(0)101 0000 888"
    },
    {
        titolo: "LOCATION ON MAP",
        image:"map.png"
    }
]

};

const iMieiDati = reactive(ilMioOggettone);

export default iMieiDati