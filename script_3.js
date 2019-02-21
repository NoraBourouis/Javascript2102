let number
let hashtag = ""
number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
for(let count = 1; count <= number; count++){
  hashtag += "#" 
  let espace = ""
  for(let c = 1; c <= number - count; c++){
    espace += " "
   } 
  let result = espace + hashtag 
  console.log(result)
}

