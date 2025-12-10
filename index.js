//Vou deixar tudo explicado para nao ter problemas hahaha
// Dados dos pets
//Aqui onde muda o HTML
const nomeDoPet = document.getElementById("nomeDoPet");
const descPet = document.getElementById("descricao");
const fotoGrande = document.getElementById("fotoGrande");

//miniatura dos pet,para ver onde o usuario clicou,logo adiciono um eventListener
const scooby = document.getElementById("Scooby");
const pantera = document.getElementById("Pantera");
const thor = document.getElementById("Thor");
const garfield = document.getElementById("Garfield");

//Obejeto com Array para pegar o que vai ser colocado no HTML
const pets = [
    {
        nome: "Scooby",
        descricao: "Scooby é um cão leal e protetor. Ama crianças e é muito obediente. Precisa de espaço para correr e brincar. Ideal para famílias ativas.",
        fotoGrande: "./assets/scoby.png",
        fotoMini: "./assets/scoby.png"
    },
    {
        nome: "Pantera",
        descricao: "Pantera é uma gatinha carinhosa e brincalhona. Ela adora carinho e é muito sociável com outros gatos. Procura uma família que lhe dê muito amor e atenção.",
        fotoGrande: "./assets/pantera.png",
        fotoMini: "./assets/pantera.png"
    },
    {
        nome: "Thor",
        descricao: "Thor é um cão cheio de energia e lealdade. Adora brincar e estar perto da família, sempre demonstrando carinho e proteção. Procura um lar onde possa receber amor e ter bastante espaço para gastar sua energia.",
        fotoGrande: "./assets/thor.png",
        fotoMini: "./assets/thor.png"
    },
    {
        nome: "Garfield",
        descricao: "Garfield é um gato independente mas carinhoso. Gosta de explorar e é muito curioso. Ideal para quem quer um companheiro aventureiro.",
        fotoGrande: "./assets/garfield.png",
        fotoMini: "./assets/garfield.png"
    }
];

//Pega o ID é o parametro do eventListener 
const verificarClique = (id) => {
    if(id === "Scooby"){
        mostrarInfo(pets[0]);
    }

    else if(id === "Pantera"){
        mostrarInfo(pets[1]);
    }

    else if(id === "Thor"){
        mostrarInfo(pets[2]);
    }

    else if(id === "Garfield"){
        mostrarInfo(pets[3]);
    }
}

//Muda o HTML
const mostrarInfo = (pet) => {
    nomeDoPet.textContent = pet.nome;
    descPet.textContent = pet.descricao;
    fotoGrande.src = pet.fotoGrande
}


//Adiciona o evento de clique,que chama a função VerificarClique(Com o parametro)
scooby.addEventListener("click", () => verificarClique("Scooby"));
pantera.addEventListener("click", () => verificarClique("Pantera"));
thor.addEventListener("click", () => verificarClique("Thor"));
garfield.addEventListener("click", () => verificarClique("Garfield"));