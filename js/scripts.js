var repository=[];
var pokemon1={
  name:'Bulbasaur',
  height:7,
  types:['grass','poison']
};
var pokemon2={
  name:'Squirtle',
  height:0.5,
  types:['grass','electric']
};
var pokemon3={
  name:'Pikachu',
  height:0.4,
  types:['ground']
};
repository=[pokemon1,pokemon2,pokemon3];
for (var i = 0; i < repository.length; i++) {
  if (repository[i].types[0]=='grass') {
    if (repository[i].height>1) {
      //document.write("<span style='color:green'>"+repository[i].name+' (height:'+repository[i].height+')-Wow, thats big!)<br>'+"</span>");
      document.write("<span class='plant'>"+repository[i].name+' (height:'+repository[i].height+')-Wow, thats big!)<br>'+"</span>");
    }
    else {
      //document.write("<span style='color:green'>"+repository[i].name+' (height:'+repository[i].height+')<br>'+"</span>");
      document.write("<span class='plant'>"+repository[i].name+' (height:'+repository[i].height+')<br>'+"</span>");
    }
  }
  else {
    //document.write("<span style='color:red'>"+repository[i].name+' (height:'+repository[i].height+')<br>'+"</span>");
    document.write("<span class='fire'>"+repository[i].name+' (height:'+repository[i].height+')<br>'+"</span>");
  }
}
