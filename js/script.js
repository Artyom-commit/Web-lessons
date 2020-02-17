var app = new Vue({
    el: "#app",
    data: 
    {
        animals: [

            {family: "Птицы",
             show: false,
             cont: [
                 {name: "Воробей",
                  href: "#"},
                 {name: "Синица",
                 href: "#"},
                 {name: "Голубь",
                 href: "#"},
                 {name: "Клест",
                 href: "#"},
                ]},

            {family: "Хищники",
             show: false,
             cont: [
                 {name: "Волк",
                 href: "#"},
                 {name: "Лев",
                 href: "#"},
                 {name: "Гиена",
                 href: "#"},
                 {name: "Крокодил",
                 href: "#"},
                ]},

            {family: "Млекопитающие",
             show: false,
             cont: [
                 {name: "Корова",
                 href: "#"},
                 {name: "Кот",
                 href: "#"},
                 {name: "Барсук",
                 href: "#"},
                 {name: "Собака",
                 href: "#"},
                ]}
        ]
    }
      

})