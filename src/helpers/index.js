export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('en-Us', {
        style: 'currency',
        currency: 'USD'
    })
}