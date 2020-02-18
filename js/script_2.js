var app = new Vue({
    el: "#app_2",
    data: {message: "Hello world",
           status: false,
           inp: '',
           status_one: false
        },
    methods: {
        fun: function(){
            console.log("Console message")
        },
        console_inp: function(){
            console.log(this.inp)
        }
    }
})