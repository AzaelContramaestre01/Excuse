window.onload = function(){
   
    var adj = ['Un mago ', 'Un desarrollador ', 'Alguien enojado ', 'El vicioso ','El millonario ',];
    var pronombre = ['trotador ', 'estudioso ','perruno ', 'mercenario ', 'filantropo ', 'comediante ',];
    var accion = ['expropio mi ', 'le gusto mi ', 'quemo mi ' , 'atrapo mi ', 'encanto mi ', 'le pego a mi ',];
    var posesion = ['novia ', 'perro ', 'flecha ', 'pc  ', 'licencia ', 'dedo indice ',];
    var lugar = ['en mi casa','en tu casa','en nuestra casa', 'en la casa de ellos', 'en casa de hercules', 'en casa de eritrea',];
    

     var n1 = Math.floor((Math.random() * adj.length) );
     var n2 = Math.floor((Math.random() * pronombre.length) );
     var n3 = Math.floor((Math.random() * accion.length) );
     var n4 = Math.floor((Math.random() * posesion.length) );
     var n5 = Math.floor((Math.random() * lugar.length) );
    
      
      document.querySelector('#excuse').innerHTML = excuse; 
    
  }
