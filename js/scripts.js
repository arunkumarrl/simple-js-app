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
repository.forEach (function(element){document.write('(name:'+element.name+') (height:'+element.height+') (types:'+element.types+')<br>');});
