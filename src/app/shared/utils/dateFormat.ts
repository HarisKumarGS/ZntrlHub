export const formatDate = (dateCreated: string) => {
    let date = new Date(dateCreated);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? Number('0'+minutes) : minutes;
    // var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
}