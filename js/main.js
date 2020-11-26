import { fetchData } from "./components/TheDataMiner.js"

(() => {
    Vue.component("prof-card", {
        props: ["item"],

        template: `<li>
                        <p>Prof Name: {{ item.name }}</p>

                        <a href="" class="remove-prof">Show {{ item.name }}'s Info</a>
                        <a href="" class="remove-prof">Remove {{ item.name }}</a>

                    </li>`,

        created: function() {
            console.log('Loaded a prof card');
        }
    });

    let vue_vm = new Vue({
        // link to an element in HTML
        // el: "#app",

        data: {
            message: "Hello from Vue",
            removeAformat: true,
            showBioData: false,
            professors: [],
            currentProfData: {},

        
            // collection: [
            //     { name: "Justin", role:"coordinator", nickname: "nitsuj"},
            //     { name: "Joe", role:"prof", nickname: "Teddy"},
            //     { name: "Pan", role:"code ninja", nickname: "Spiderpan"},
            // ],
        },

        // "mounted" is a vue lifecycle hook. When vue is done creating itself,
        //it attaches to the "app" (main) element on the page.
        mounted: function() {
            console.log("Vue is mounted");

            this.collection.push({name: "Jarrod", role: "prof", nickname: "J"})
        },

        // "Updated" is it's own lifecycle Hook.
        // run a method when we change our view (update the DOM)
        updated: function() {
            console.log("Vue updated the DOM");
        },

        methods: {
            logClicked() {
                console.log("Clicks a thing");
            },

            clickHeader(){
                console.log("Clicked the header");
            },

            removeProf(target){
                console.log("Clicked to remove prof", target, target.name);
                //the this keyword inside a vue instance REFERS to the vue instance itself by default

                // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false: true
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML

})();