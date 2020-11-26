export default {
    name:"TheProfCard",

    props: ["item"],

    // data needs to be a function inside a component
    data: function(){
        return {
            myName: this.item.name,
            myRole: this.item.role,
            program: "IDP"
        }
    },

    template: 
        `<li>
            <p>Prof Name: {{ item.name }}</p>

            <a href="" class="remove-prof">Show {{ item.name }}'s Info</a>
            <a href="" class="remove-prof">Remove {{ item.name }}</a>

        </li>`,

    created: function() {
        console.log('Loaded a prof card');
    },

    methods: {
        logClicked() {
            console.log(`Fired from inside ${this.item.name}'s component`)
        }
    }

    
}