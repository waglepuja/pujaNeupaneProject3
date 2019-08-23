const entertainments ={
    movie:[
        {
            title:'hello1',
            genre1:'horror'
        },
        {
            title:'hello2',
            genre1:'action'
        },
        {
            title:'hello3',
            genre1:'romance'
        },
        {
            title:'hello4',
            genre1:'thriller'
        }
        
    ],
    games:[
        {
            title:'hello5',
            genre1:'shooter'

        },
        {
            title:'hello6',
            genre1:'survival'

        },
        {
            title:'hello7',
            genre1:'platform'

        },
        {
            title:'hello8',
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

  
//  if (userEntertainments !== ''){
//      $('input:radio').val('');
//  }
   
 
 const entertainmentsArray = entertainments[userEntertainments];
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