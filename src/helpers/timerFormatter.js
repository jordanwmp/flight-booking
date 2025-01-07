const durationTrip = (isoTime) => {
    const hoursMatch = isoTime.match(/(\d+)H/);
    const minutesMatch = isoTime.match(/(\d+)M/);

    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;
    return `${hours}h - ${minutes}min`

}

const formatDateToTime = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

const formatDepatureReturnDate = (startDateTimeString, durationString) => {
    // Cria um objeto Date para a data de partida
    const departureDate = new Date(startDateTimeString);
    
    // Função auxiliar para adicionar duração a uma data
    function addDuration(date, duration) {
        const regex = /P(T?(\d+H)?(\d+M)?)/;
        const matches = duration.match(regex);

        if (matches) {
            const hours = matches[2] ? parseInt(matches[2], 10) : 0;
            const minutes = matches[3] ? parseInt(matches[3], 10) : 0;

            date.setHours(date.getHours() + hours);
            date.setMinutes(date.getMinutes() + minutes);
        }

        return date;
    }

    // Adiciona a duração à data de partida para calcular a data de chegada
    const arrivalDate = addDuration(new Date(departureDate), durationString);
    
    // Função auxiliar para formatar a data
    function formatDate(date) {
        const daysOfWeek = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
        const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

        const dayOfWeek = daysOfWeek[date.getUTCDay()];
        const day = date.getUTCDate();
        const month = months[date.getUTCMonth()];

        return `${dayOfWeek}, ${day} ${month}`;
    }

    // Formata as datas de partida e chegada
    const formattedDeparture = formatDate(new Date(departureDate));
    const formattedArrival = formatDate(new Date(arrivalDate));

    // Retorna o formato desejado
    return `${formattedDeparture} - ${formattedArrival}`;
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Lembre-se que os meses vão de 0 a 11
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
 
 

export {
    durationTrip,
    formatDateToTime,
    formatDepatureReturnDate,
    formatDate
}