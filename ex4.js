const devolucoes=[]
console.log(devolucoes)
console.log(devolucoes)
devolucoes.unshift(
    {nome1:"Alice no país das maravilhas",
    autor1:"Pedro bandeira",
    diasAtrasado1:7},
    {nome2:"cinderella",
    autor2:"disney",
    diasAtrasado2:9},
    {nome3:"peter pan",
    autor3:"sininho",
    diasAtrasado3:17}
)
const primeiro=devolucoes[0]
console.log(primeiro)

const segundo=devolucoes[1]
console.log(segundo)

const terceiro=devolucoes[2]
console.log(terceiro)
//calma me perdi

const parte1 = devolucoes.slice(1,3)
console.log(parte1)
console.log(devolucoes[0])

const parte2 = devolucoes.slice(1,2)
console.log(parte2)
console.log(devolucoes[1])

const parte3 = devolucoes.slice(1,1)
console.log(parte3)
console.log(devolucoes[2])

return devolucoes
