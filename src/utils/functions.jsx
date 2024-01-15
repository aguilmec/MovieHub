export function filterByType(newMovieList, movieList, filters){
    if(filters.type === 'Movies & TV Shows'){
        newMovieList = filterByGenre([...movieList], movieList, filters);
        return newMovieList;
    }else{
        return(newMovieList.filter((movie)=>{
            if(movie.type === filters.type.toLowerCase()){
                return true;
            }else{
                return false;
            };
        }));
    };        
};

export function filterByGenre(newMovieList, movieList, filters){
    if(filters.genre === 'All'){
        newMovieList = filterByType([...movieList], movieList, filters);
        return newMovieList;
    }else{
        return(newMovieList.filter((movie)=>{
            if(movie.genre === filters.genre){
                return true;
            }else{
                return false;
            };
        }));
    }
};