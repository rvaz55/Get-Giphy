let topics = ["Happy", "Excited", "Suspense", "Warm/Fuzzy", "Goofy"];
let btnsDiv = $("#btnsGoHere")

for (let i = 0 ; i <= topics.length-1 ; i++ ){
   
    let btn = $("<button>")
    btn.text(topics[i])
    btn.attr("id",topics[i])
    btn.attr("type", "click")
    btn.addClass("topicBtns")
    btnsDiv.append(btn)
    
}

$("#moodBtn").on("click",function(event){
    event.preventDefault();
    let btn = $("<button>")
    //the .val method grabs the value of the input!
    let moodText = $("#moodText").val()
    btn.attr("type", "click")
    btn.addClass("topicBtns")
    btn.attr("id", moodText)
    btn.bind("click",function(event){
        event.preventDefault();
        let term = event.currentTarget.id
        console.log(term);
        })
    btn.text(moodText)
    btnsDiv.append(btn)
})

//$(document).on("click", "button.topicBtns", handleClick);


$(".topicBtns").on("click", function(){
    var term = this.id;
    retrieveGif(term);
    })

    // function handleClick(){
    
    //     var term = this.id;
    //     retrieveGif(term);
    // }

function retrieveGif(term){

    //let s = prompt("What's your mood?")
    let apiKey = "&api_key=zYTJAPxgYvdxvOwz1E0W0GSskruLy3DI&limit=10"

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + term + apiKey
    console.log("this is the queryURL: " + queryURL)

$.ajax({
   
    url: queryURL,
    method: "GET"
    }).then(function(response){
        let results = response.data
        console.log("this is results: " + results)
        for (let i =0 ; i <= results.length ; i++){
        let gifImgEl = $("<img>").attr("src",response.data[i].images.fixed_height_still.url)
        console.log(gifImgEl)
        $("#allGifsDiv").append(gifImgEl)
        }
        }
    );
}


