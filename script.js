/*document.getElementsByClassName("f1slika")[0].addEventListener("click",function(){
   
    var trenutniscale=this.style.transform;

    if(trenutniscale=="scale(1.5)")
    {
     this.style.transform="scale(1.0)"
    }
    else{
        this.style.transform="scale(1.5)"
}

})*/

/*var brojslika=document.getElementsByClassName("f1slika").length
for(var i=0;i<brojslika;i++){
    document.getElementsByClassName("f1slika")[i].addEventListener("click",function(){
   
   this.classList.toggle('zoom');
    
    
    })
}*/


document.getElementById('imageHolder').addEventListener("click",function(e){
    e.target.classList.toggle('zoom');
})

document.getElementById('paraHolder').addEventListener("click",function(e){
var target=e.target
console.log(target)
})


