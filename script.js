$(document).ready(function(){
    var url = "https://api.covid19india.org/data.json";

    $.getJSON(url,function(data){
        console.log(data)

        var total_active,total_recovered,total_deaths,total_confirmed

        var states = []
        var confirmed = []
        var recovered = []
        var deaths = []
        var active = []

        $.each(data.statewise,function(id,obj){
            states.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)
            active.push(obj.active)
        })

        states.shift() // removes first element from the array 
        confirmed.shift()   
        recovered.shift()   
        deaths.shift()   
        active.shift()   
        console.log(states)


        total_active = data.statewise[0].active
        total_confirmed = data.statewise[0].confirmed
        total_recovered = data.statewise[0].recovered
        total_deaths = data.statewise[0].deaths

        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)


        var myChart = document.getElementById("my-chart").getContext('2d')
        var myChart2 = document.getElementById("my-chart2").getContext('2d')
        var myChart3 = document.getElementById("my-chart3").getContext('2d')

        var chart = new Chart(myChart,{
            type:'line',
            data:{
                labels:states,
                datasets:[
                    {
                        label:"Confirmed Cases",
                        data:confirmed,
                        backgroundColor:"#FFD04A",
                        minBarLength:100
                    },
                    {
                        label:"Recovered Cases",
                        data:recovered,
                        backgroundColor:"#69EE5D",
                        minBarLength:100
                    },
                    {
                        label:"active Cases",
                        data:active,
                        backgroundColor:"#649AFB",
                        minBarLength:100,
                        // type:'line'
                    },
                    {
                        label:"Total Deceased",
                        data:deaths,
                        backgroundColor:"#FF413B",
                        minBarLength:100
                    }
                    
                ]
            },
            options:{}
        })

        var chart = new Chart(myChart2,{
            type:'radar',
            data:{
                labels:states,
                datasets:[
                    {
                        label:"Confirmed Cases",
                        data:confirmed,
                        backgroundColor:"#FFD04A",
                        // minBarLength:100
                    },
                    {
                        label:"Recovered Cases",
                        data:recovered,
                        backgroundColor:"#69EE5D",
                        // minBarLength:100
                    },
                    {
                        label:"active Cases",
                        data:active,
                        backgroundColor:"#649AFB",
                        // minBarLength:100,
                        // type:'line'
                    },
                    {
                        label:"Total Deceased",
                        data:deaths,
                        backgroundColor:"#FF413B",
                        // minBarLength:100
                    }
                    
                ]
            },
            options:{}
        })


        var chart = new Chart(myChart3,{
            type:'pie',
            data:{
                labels:states,
                datasets:[
                    {
                        label:"Confirmed Cases",
                        data:confirmed,
                        backgroundColor:"#FFD04A",
                        // minBarLength:100
                    },
                    {
                        label:"Recovered Cases",
                        data:recovered,
                        backgroundColor:"#69EE5D",
                        // minBarLength:100
                    },
                    {
                        label:"active Cases",
                        data:active,
                        backgroundColor:"#649AFB",
                        // minBarLength:100,
                        // type:'line'
                    },
                    {
                        label:"Total Deceased",
                        data:deaths,
                        backgroundColor:"#FF413B",
                        // minBarLength:100
                    }
                    
                ]
            },
            options:{}
        })





        
    })
})