


var mydata= document.getElementById('main');
var author=document.getElementById('author');
var mname=document.getElementById('mname');
var murl= document.getElementById('url');
var getmovie = function(){

    var mdiv = document.createElement('div');
    var mimg = document.createElement('img');
    var mtitle   = document.createElement('h2')
    var authorname = document.createElement('h3')

     mimg.src = murl.value;
     mimg.alt = mname.value;
  
     mtitle.textContent=mname.value;
     authorname.textContent=author.value;

     mdiv.append(mimg,mtitle,authorname);
     
     mdiv.setAttribute('class','extra2');
     mydata.append(mdiv)}

     function clearfield(){
       document.getElementById('url').value='';
       document.getElementById('mname').value='';
       document.getElementById('author').value='';
     }

