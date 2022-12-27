const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbulos = '.,;[]{}!@#$%¨&*()+=_-';
const geraSimbulo  = () => simbulos[rand(0,simbulos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbulos) {
    const senhaArray = []
    qtd = Number(qtd);
    
    for(let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbulos && senhaArray.push(geraSimbulo());

    }

    return senhaArray.join('').slice(0,qtd);
}
