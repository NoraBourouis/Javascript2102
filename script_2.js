var nombre = Number("");
  function giveFactorielle() {
   nombre= prompt("De quel nombre veut tu calculer la factorielle ?"); 
  let n = nombre;
  let i = 1
    
  while(i<nombre) {
        n*=i;
        i++;
}

  console.log(`Le résultat est : ${n} `);
}
giveFactorielle();