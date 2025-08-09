function potencia(base, exponente) {
    if (exponente < 0) throw new Error('El exponente debe ser positivo');
    if (exponente === 0) return 1;
    return base * potencia(base, exponente - 1);
}

function numeroTriangular(n) {
    if (n < 0) throw new Error('El número debe ser positivo');
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

module.exports = potencia, numeroTriangular;
