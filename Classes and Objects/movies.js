class Movie{
    constructor(title, director, year){
        this.title=title;
        this.director=director;
        this.year=year;
    }
}
addMovieToList=(Movie)=>{
    const list=document.getElementById("ml");
    const row=document.createElement('tr');
    row.innerHTML="<td>"+Movie.title+"</td><td>"+Movie.director+"</td><td>"+Movie.year+"</td>";
    list.appendChild(row)
}
document.querySelector('#frm').addEventListener('submit',addAMovie)
function addAMovie(e){
    e.preventDefault();
    title=document.querySelector('#ttl').value;
    director=document.querySelector('#drctr').value;
    year=document.querySelector('#yr').value;
    const movie=new Movie(title, director, year)
    addMovieToList(movie)
    document.querySelector('#ttl').value="";
    document.querySelector('#drctr').value="";
    document.querySelector('#yr').value="";
}