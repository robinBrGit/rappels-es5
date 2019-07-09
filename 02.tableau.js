var lg = console.log;
var villes = ['nantes','paris','saint-nazaire','angers','le mans'];

villes.forEach(function (valeur) {
    lg(valeur);
});

var lettreADansToutesLesVilles = villes.every(function (value) {
    return value.includes('a');
});

lg('lettreADansToutesLesVilles = '+lettreADansToutesLesVilles);

var villesSansTiretSansEspace = villes.filter(function (value) {
    return (!value.includes('-') && !value.includes(' '))
});

lg(villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(function (value) {
    return value.endsWith('s');
}).map(function (value) {
    return value.toUpperCase();
});

lg(villesMajusculeSeTerminantParS);

