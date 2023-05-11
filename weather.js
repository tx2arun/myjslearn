let weather
pt=prompt('Enter 1 for rain, 2 for sun: ')

if(pt==1){
    weather='raining'
}
else if(pt==2){
    weather='sunny'
}

wdecision(weather)
alert(decision(10,30,50))



function wdecision(weather){
    if(weather =='raining') {
        alert(`its ${weather}, So grab and umberalla`)
    }
    else {
        alert (`its ${weather}, So wear a sunglass`)
    }
}

const decision = (a,b,c) => {
decision = a + b + c
}