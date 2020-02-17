var app = new Vue({
    el: "#app",
    data: 
    {
        animals: [

            {family: "Птицы",
             show: false,
             cont: [
                 {name: "Воробей"},
                 {name: "Синица"},
                 {name: "Голубь"},
                 {name: "Клест"},
                ]},

            {family: "Хищники",
             show: false,
             cont: [
                 {name: "Волк"},
                 {name: "Лев"},
                 {name: "Гиена"},
                 {name: "Крокодил"},
                ]},

            {family: "Млекопитающие",
             show: false,
             cont: [
                 {name: "Корова"},
                 {name: "Кот"},
                 {name: "Барсук"},
                 {name: "Собака"},
                ]}
        ]
    }
      

})