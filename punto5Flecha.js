let salario = 3500000
let cantidadLicenciasVendidas = 4

let calcularSalario = (salBas,licenVend)=>{
    let basico = salBas + (licenVend*1500000)
    let descuento = basico * 0.05
    return (basico-descuento)
}

console.log("El valor neto a pagar es: "+calcularSalario(salario,cantidadLicenciasVendidas));