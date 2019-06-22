var repository=[
{
  name:'Bulbasaur',
  height:7,
  types:['grass','poison']
},
{
  name:'Squirtle',
  height:0.5,
  types:['grass','electric']
},
{
  name:'Pikachu',
  height:0.4,
  types:['ground']
}]
for (var i = 0; i < repository.length; i++) {
  /*if (repository[i].types[0]=='grass') {
    if (repository[i].height>1) {
      //document.write("<span style='color:green'>"+repository[i].name+' (height:'+repository[i].height+')-Wow, thats big!)<br>'+"</span>");
      document.write("<span class='plant'>"+repository[i].name+' (height:'+repository[i].height+')-Wow, thats big!<br>'+"</span>");
    }
    else {
      //document.write("<span style='color:green'>"+repository[i].name+' (height:'+repository[i].height+')<br>'+"</span>");
      document.write("<span class='plant'>"+repository[i].name+' (height:'+repository[i].height+')<br>'+"</span>");
    }
  }
  else {
    //document.write("<span style='color:red'>"+repository[i].name+' (height:'+repository[i].height+')<br>'+"</span>");
    document.write("<span class='fire'>"+repository[i].name+' (height:'+repository[i].height+')<br>'+"</span>");
  }*/
repositoryPrint(repository[i]);
}
function repositoryPrint(repository){
  document.write('(name:'+repository.name+') (height:'+repository.height+') (types:'+repository.types+')<br>');
}
