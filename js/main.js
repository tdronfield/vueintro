// Partially revealing module
// A variation on our module theme

const myVM = (() => {
    let vue_vm = new Vue({
        // link to an element in HTML
        // el: "#app",

        data: {
            message: "Hello from Vue",

            collection: [
                { name: "Justin", role:"coordinator", nickname: "nitsuj"},
                { name: "Joe", role:"prof", nickname: "Teddy"},
                { name: "Pan", role:"code ninja", nickname: "Spiderpan"},
            ]
        },

        methods: {
            logClicked() {
                console.log("Clicks a thing");
            },

            clickHeader(){
                console.log("Clicked the header");
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();