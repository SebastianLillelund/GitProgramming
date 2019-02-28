var movies = [{
    title: "Titanic",
    duration: "30 minutes",
    actors: ["Leonardo DiCaprio","Kate Winslet","Billy Zane"]
}, {
    title: "Jay´s angels",
    duration: "60 minutes",
    actors: ["Jay Lees"]
}];


function printMovies(moviesToPrint){
    for (j=0; j<moviesToPrint.length;j++){
        printInfo(moviesToPrint[j]);
    
    }

}


function printInfo(movieToPrint){

    var actorsList = "";

    for (i=0; i < movieToPrint.actors.length; i++){
        if (i==(movieToPrint.actors.length-1)){
            actorsList = actorsList + movieToPrint.actors[i] + ".";
        }
        else {
            actorsList = actorsList + movieToPrint.actors[i] + ", ";
        }
        
    }

    console.log(movieToPrint.title + " lasts for " + movieToPrint.duration + ". Actors: " + actorsList);
}


printMovies(movies);