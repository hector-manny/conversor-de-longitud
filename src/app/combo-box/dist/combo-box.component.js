"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = exports.ComboBoxComponent = void 0;
var core_1 = require("@angular/core");
var ComboBoxComponent = /** @class */ (function () {
    function ComboBoxComponent() {
    }
    ComboBoxComponent.prototype.ngOnInit = function () {
        // iniciando las variables
        this.unidades = ["Pulgada", "Metro", "Kilometro"];
        this.opcionSeleccionado = "Selecciona";
        this.valorcm = 0;
        this.valorconversion = 0;
    };
    // funcion que realiza los calculos
    ComboBoxComponent.prototype.capturar = function () {
        switch (this.opcionSeleccionado) {
            case 'Pulgada':
                this.valorconversion = this.valorcm * 0.3937;
                break;
            case 'Metro':
                this.valorconversion = this.valorcm / 100;
                break;
            case 'Kilometro':
                this.valorconversion = this.valorcm / 100000;
                break;
        }
    };
    ComboBoxComponent = __decorate([
        core_1.Component({
            selector: 'app-combo-box',
            templateUrl: './combo-box.component.html',
            styleUrls: ['./combo-box.component.css']
        })
    ], ComboBoxComponent);
    return ComboBoxComponent;
}());
exports.ComboBoxComponent = ComboBoxComponent;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;
