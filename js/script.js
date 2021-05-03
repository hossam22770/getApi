let x = new XMLHttpRequest();
x.open("GET","https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50");
x.send();
let movie;
x.addEventListener("readystatechange",function ()
{
    if(x.readyState==4)
    {
        movie=JSON.parse(x.response).results;
        display();
    }
})
function display()
{
    let s=``;
    for (let i=0 ;i<movie.length;i++)
    {
        s+=`<div class="col-md-4">
        <div class="position-relative">
        <div class="position-absolute pos">${movie[i].vote_average}</div>
        </div>
        <img src="https://image.tmdb.org/t/p/w500${movie[i].poster_path}" class="w-100" alt="">
        <h3>${movie[i].title}</h3>
        <p>${movie[i].overview}</p>
    </div>`;
    }
    console.log(s);
    document.getElementById("posts").innerHTML=s;

}