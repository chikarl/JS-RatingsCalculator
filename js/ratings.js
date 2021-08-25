
function collect_ratings(){
    let ratings = {average:0, count:0, sum:0 };
    let rating = 0;

    const elements = document.querySelectorAll('.rating')
    
    elements.forEach(function(element){
        rating = parseInt(element.id.replace('star', ''))
        ratings.count += parseInt(element.value)
        ratings.sum += parseInt(element.value)*rating
    });

    if (ratings.count !== 0){
        ratings.average =(ratings.sum/ratings.count)
    }

    return ratings
}
console.log(collect_ratings());

addEventListener('change', function(){
    const ratings = collect_ratings()

    document.querySelector('#average').value = ratings.average.toFixed(2)
})