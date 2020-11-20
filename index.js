window.onload = function () {

    let adj = ['Un mago ', 'Un desarrollador ', 'Alguien enojado ', 'El vicioso ', 'El millonario ',];
    let pronombre = ['trotador ', 'estudioso ', 'perruno ', 'mercenario ', 'filantropo ', 'comediante ',];
    let accion = ['expropio mi ', 'le gusto mi ', 'quemo mi ', 'atrapo mi ', 'encanto mi ', 'le pego a mi ',];
    let posesion = ['novia ', 'perro ', 'flecha ', 'pc  ', 'licencia ', 'dedo indice ',];
    let lugar = ['en mi casa', 'en tu casa', 'en nuestra casa', 'en su casa', 'en casa de hercules', 'en casa de eritrea',];


    let n1 = Math.floor((Math.random() * adj.length));
    let n2 = Math.floor((Math.random() * pronombre.length));
    let n3 = Math.floor((Math.random() * accion.length));
    let n4 = Math.floor((Math.random() * posesion.length));
    let n5 = Math.floor((Math.random() * lugar.length));


    document.querySelector('#excuse').innerHTML = adj[n1] + pronombre[n2] + accion[n3] + posesion[n4] + lugar[n5];

}
