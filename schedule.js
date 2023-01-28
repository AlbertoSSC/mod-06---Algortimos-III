// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];
// Datos
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

var arrYes = [];
var assignHourAvailab = array => {
    var trueOrFalse = (Math.round(Math.random()) === 0) ? "No" : "Si";
    array.fill(WORK_HOURS[i] + ": " + trueOrFalse, i);
    if (trueOrFalse === "Si") arrYes.push(i);
};

for (var member of myTeam) {
    for (var i = 0; i < member.availability.length; i++) {
        assignHourAvailab(member.availability);
    };
    console.log(member.name, member.availability);
};

for (var i = 0; i < WORK_HOURS.length; i++) {
    var arrFinal = arrYes.filter(element => element === i);
    if (arrFinal.length === 4) {
        console.log("===> "+WORK_HOURS[i] + ": es el horario disponible para todos. <===");
        break;
    } else if (i === WORK_HOURS.length - 1) {
        console.log("*** No hay horario disponible ***");
    };
};