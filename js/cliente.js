"use strict";
var empresa;
(function (empresa) {
    class Cliente extends empresa.Pessoa {
        constructor(codigo) {
            super();
            this._saldo = 0;
            this._codigo = codigo;
        }
        get codigo() {
            return this._codigo;
        }
        get saldo() {
            return this._saldo;
        }
        deposita(valor) {
            this._saldo += valor;
        }
        comprar(valorCompra) {
            if (this._saldo >= valorCompra) {
                this._saldo -= valorCompra;
                return true;
            }
            else {
                return false;
            }
        }
    }
    empresa.Cliente = Cliente;
})(empresa || (empresa = {}));
