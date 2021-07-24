class Pato{
    pato: string;
    grasna(){
        return "Quack Quack";
    }
    nada(){
        return "Splash...";
    }
    display(){
        return "parece um: " + this.pato;
    }
    voa(){
        return "Pato Voando.";
    }
}

class PatoMallard extends Pato{
    pato: string = "Pato Bravo";
}

class PatoRuivo extends Pato{
    pato: string = "Pato Ruivo (cabeça vermelha)";
}

const pato = new PatoRuivo();
var botaoGrasna = document.getElementById('grasna');
var botaoNada = document.getElementById('nada');
var botaoDisplay = document.getElementById('display');
var botaoVoa = document.getElementById('voa');

botaoGrasna.onclick = function(){
    document.getElementById("calculo").innerText = pato.grasna().toString();
}
botaoNada.onclick = function(){
    document.getElementById("calculo").innerText = pato.nada().toString();
}
botaoDisplay.onclick = function(){
    document.getElementById("calculo").innerText = pato.display().toString();
}
botaoVoa.onclick = function(){
    document.getElementById("calculo").innerText = pato.voa().toString();
}