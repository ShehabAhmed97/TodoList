exports.getDate =  function(){
    const date = new Date();
    const options = {
        weekday : 'long',
        year : 'numeric',
        month : 'short',
        day : 'numeric'
    }
    return date.toLocaleDateString('en-US',options);
}