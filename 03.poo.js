var lg = console.log;
function Personne(prenom,nom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom+" "+this.prenom+" "+this.pseudo;
    }
}

var jules = new Personne('Jules','LEMAIRE','jules77');
var paul = new Personne('Paul','LEMAIRE','paul44');

var afficherPersonne = function (personne) {
    lg(personne.nom);
    lg(personne.prenom);
    lg(personne.pseudo);
    lg(personne.getNomComplet())
}
afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = 'jules44';
lg(jules.getNomComplet());
lg(jules.age);
Personne.prototype.age = 'NON RENSEIGNE';
lg(jules.age);
jules.age = 30;
lg(jules.age);

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0)+this.nom.charAt(0);
};

lg(jules.getInitiales());

var robert = {
    prenom : 'Robert',
    nom : 'LEPREFET',
    pseudo : 'robert77',
    getNomComplet : function () {
        return this.nom+' '+this.prenom+' '+this.pseudo;
    }
};

afficherPersonne(robert);

function Client(prenom,nom, pseudo, numeroClient) {
    Personne.call(this,prenom,nom,pseudo);
    this.numeroclient = numeroClient;
    this.getInfos = function () {
        return this.numeroclient+' '+this.nom+' '+this.prenom;
    };
}

var steve = new Client('Steve','LUCAS','steve44','A01');
afficherPersonne(steve);
lg(steve.numeroclient);
lg(steve.getInfos());