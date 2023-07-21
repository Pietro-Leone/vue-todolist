"use strict"

Vue.createApp({

    data() {
        return {
            toDoList: [
                {
                    id: 0,
                    text: "Elemento 1",
                    done: false,
                },
                {
                    id: 1,
                    text: "Elemento 2",
                    done: false,
                },
                {
                    id: 2,
                    text: "Elemento 3",
                    done: false,
                },
                {
                    id: 3,
                    text: "Elemento 4",
                    done: false,
                },
                {
                    id: 4,
                    text: "Elemento 5",
                    done: false,
                },
            ],
        };
    },
    methods: {

    },
    mounted() {

    },
}).mount("#app");