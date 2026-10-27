//********ANGOGA2627*********/
function esPinValido(pin) {
    if (typeof pin !== 'string') {
        return false;
    }

    const longitudValida = pin.length === 4 || pin.length === 6;
    const soloDigitos = /^[0-9]+$/.test(pin);
    const todosIguales = /^([0-9])\1+$/.test(pin);

    if (!longitudValida || !soloDigitos || todosIguales) {
        return false;
    }

    return true;
}

export { esPinValido };