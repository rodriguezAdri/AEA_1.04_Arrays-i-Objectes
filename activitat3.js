//1
const estudiant = {
    nom: 'Joan',
    edat: 20,
    notes: {
        matematiques: 8,
        programacio: 9,
        fisica: 7
    }
};

const {nom, edat, notes: {matematiques}} = estudiant;

document.getElementById("text").textContent = `${nom} té ${edat} anys i ha tret un ${matematiques} en matematiques.`;

//2
const coordenades = [12, 5, 8];
const [x, y, z] = coordenades;
document.getElementById("coordenades").textContent = `Les coordenades són x=${x}, y=${y}, z=${z}.`;

//3
const preus = [100, 200, 300, 400];

const incrementarPreus = (preus) => {
    return preus.map(preu => (preu * 1.1).toFixed(2)); 
}

const preusActualitzats = incrementarPreus(preus);
document.getElementById("map").textContent = `Els preus actualitzats són: ${preusActualitzats.join('€, ')}€`;

//4
function mayorDe18(preu){
    return preu >= 18;
}
const edats = [16, 21, 18, 24, 12, 30].filter(mayorDe18);

document.getElementById("filter").textContent = `Les edats majors de 18 són; ${edats.join(', ')}.`;
