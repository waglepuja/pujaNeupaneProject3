const entertainments ={
    movie:[
        {
            title:'Lucky you are still alive!',
            genre1:'horror'            
        },
        {
            title:'Do you really want to fight?',
            genre1:'action'
        },
        {
            title:'Ahh let\'s not even go there',
            genre1:'romance'
        },
        {
            title:'Super thrilling',
            genre1:'thriller'
        }
        
    ],
    games:[
        {
            title:'Shoot\'em up',
            genre1:'shooter'

        },
        {
            title:'Lucky you survived!',
            genre1:'survival'

        },
        {
            title:'Catch me if you can',
            genre1:'platform'

        },
        {
            title:'I\'m ready to fight, are you?',
            genre1:'fighting'

        }
    ]
};

$(document).ready(function(){
    

    const getRandomItemFromArray = function(passedArray){
		const randomNum = Math.floor(Math.random()* 
		passedArray.length);
        return passedArray[randomNum];
    } 

    $('form').on('submit', function(event){
        event.preventDefault();
        // console.log('ready?');
        
    let userEntertainments =$('input[name="funTime"]:checked').val();
    let userGenre1 = $('input[name="genre"]:checked').val();

    console.log("HELLO",userEntertainments);
    console.log("hi",userGenre1);   

    
    entertainmentsArray = entertainments[userEntertainments];
    console.log('array', entertainmentsArray);

    const filteredArray =[];

    for(let i=0; i < entertainmentsArray.length; i++ ){
        //  console.log("opps",userGenre1);
        //  console.log(entertainmentsArray[i].genre1);
        if (userGenre1 === entertainmentsArray[i].genre1){
            filteredArray.push(entertainmentsArray[i].title);
        }
    }

    console.log("Filtered",filteredArray);
    

    const finalResults = getRandomItemFromArray(filteredArray);
    console.log(finalResults);

    $('input:radio').prop("checked", false);

    $('.answer').html(`<h2 class ="choice">${finalResults}</h2>`)   

});        

    
});