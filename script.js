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
    // To Display genres for either movies or games. DOM used from HTML 

    $('input[name="funTime"]').change(function(){
        let userEntertainments =$('input[name="funTime"]:checked').val();
        const render = function (template, node) {
            console.log({template})
            if (!node) return;
            node.innerHTML = (typeof template === 'function' ? template() : template);
        };
        var template = function () {
            if (userEntertainments === 'movie') {
                template = `<div class="genre1">

                <p> Don't think about it, just pick one!</p>
                <div class="labels1">
                <div class="horror">
                    <input type="radio" name="genre" id="fun" value="horror" required>
                    <label for="fun">Horror</label>
                </div>
                <div class="action">
                    <input type="radio" name="genre" id="fun" value="action">
                    <label for="fun">Action</label>
                </div>
                <div class="romance">
                    <input type="radio" name="genre" id="fun" value="romance">
                    <label for="fun">Romance</label>
                </div>
                <div class="thriller">
                    <input type="radio" name="genre" id="fun" value="thriller">
                    <label for="fun">Thriller</label>
                </div>
            </div>
            
            
            <div class="submitContainer">
            <input   type="submit" class="button" value="See my results!">
        </div>`;
            } else {
                template = `<div class="genre2">

                <p>Let's see what you want to play!</p>
                    <div class="labels2">
                    <div class="shooter">                        
                        <input type="radio" name="genre" id="fun" value="shooter">
                        <label for="fun">Shooter</label>
                    </div>
                    <div class="survival">
                        <input type="radio" name="genre" id="fun" value="survival">
                        <label for="fun">Survival</label>
                    </div>
                    <div class="platform">
                        <input type="radio" name="genre" id="fun" value="platform">
                        <label for="fun">Platform</label>
                    </div>
                    <div class="fighting">
                        <input type="radio" name="genre" id="fun" value="fighting">
                        <label for="fun">Fighting</label>
                    </div>
                </div>
                </div>

            </div>
            <div class="submitContainer">
            <input   type="submit" class="button" value="See my results!">
        </div>`;
            }
            return template;
        };
        
        render(template, document.querySelector('#input'));

    });

    // DOM ends here

    // Form submit starts here

    $('form').on('submit', function(event){
        event.preventDefault();
               
    let userEntertainments =$('input[name="funTime"]:checked').val();
    let userGenre1 = $('input[name="genre"]:checked').val();  
         
    entertainmentsArray = entertainments[userEntertainments];
    
    const filteredArray =[];

    for(let i=0; i < entertainmentsArray.length; i++ ){        
        if (userGenre1 === entertainmentsArray[i].genre1){
            filteredArray.push(entertainmentsArray[i].title);
        } 
        
    }     
        
    const finalResults = getRandomItemFromArray(filteredArray);  
    
    $('input:radio').prop("checked", false);

    // Answer display starts here
    
    $('.answer').html(`<h2 class ="choice">${finalResults}</h2>`) 
     
});  

    
});