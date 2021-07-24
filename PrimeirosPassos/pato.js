var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pato = /** @class */ (function () {
    function Pato() {
    }
    Pato.prototype.grasna = function () {
        return "Quack Quack";
    };
    Pato.prototype.nada = function () {
        return "Splash...";
    };
    Pato.prototype.display = function () {
        return "parece um: " + this.pato;
    };
    Pato.prototype.voa = function () {
        return "Pato Voando.";
    };
    return Pato;
}());
var PatoMallard = /** @class */ (function (_super) {
    __extends(PatoMallard, _super);
    function PatoMallard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pato = "Pato Bravo";
        return _this;
    }
    return PatoMallard;
}(Pato));
var PatoRuivo = /** @class */ (function (_super) {
    __extends(PatoRuivo, _super);
    function PatoRuivo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pato = "Pato Ruivo (cabeça vermelha)";
        return _this;
    }
    return PatoRuivo;
}(Pato));
var pato = new PatoRuivo();
var botaoGrasna = document.getElementById('grasna');
var botaoNada = document.getElementById('nada');
var botaoDisplay = document.getElementById('display');
var botaoVoa = document.getElementById('voa');
botaoGrasna.onclick = function () {
    document.getElementById("calculo").innerText = pato.grasna().toString();
};
botaoNada.onclick = function () {
    document.getElementById("calculo").innerText = pato.nada().toString();
};
botaoDisplay.onclick = function () {
    document.getElementById("calculo").innerText = pato.display().toString();
};
botaoVoa.onclick = function () {
    document.getElementById("calculo").innerText = pato.voa().toString();
};
