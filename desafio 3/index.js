const Heroi = require("./Heroi");

const novoMago = new Heroi("Gandalf, o Cinzento", "mago", 54962); // Gandalf tem 54962 anos mesmo.
const novoGuerreiro = new Heroi("Aragorn", "guerreiro", 35);
const novoMonge = new Heroi("Bruce Lee", "monge", 42);
const novoNinja = new Heroi("Jin Sakai", "ninja", 28);

novoMago.atacar();
novoGuerreiro.atacar();
novoMonge.atacar();
novoNinja.atacar();