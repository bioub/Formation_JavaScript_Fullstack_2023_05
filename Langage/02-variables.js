// historiquement ne pas de mot clé créé une variable globale
// désactivé en mode strict (par défaut en module ESM)
// 'use strict';
// prenom = 'Romain'

// pour créer une variable en mode strict (à éviter si possible)
globalThis.prenom = 'Romain';

// avec un mot clé, choisir entre var, let et const
// var à éviter aujourd'hui (portée la fonction)
// let et const (portée le bloc)

const names = ['Romain', 'Jean', 'Eric'];

// Avec let on peut réaffecter (=, +=, -+, ++, --...)
let title = 'Hello';
title = 'Bonjour';

// avec const les tableaux/objets restent modifiables :
names.push('Toto');
// names = []; // Erreur
