// funkcja sprawdzający typ pokemona i zwracająca odpowiedni kolor dla tagu
export const setTypeColor = (name: string) =>{
    switch(name){
        case 'poison': return 'purple';
        case 'fire': return 'red';
        case 'water': return '#6390F0';
        case 'electric': return 'yellow';
        case 'fairy': return 'pink';
        case 'dark': return 'gray';
        case 'ghost': return '#735797';
        case 'dragon': return '#6F35FC';
        case 'ground': return '#E2BF65';
        case 'rock': return '#B6A136';
        case 'grass': return '#7AC74C';
        case 'ice': return '#96D9D6';
        case 'steel': return '#B7B7CE';
        case 'flying': return '#A98FF3';
        case 'fighting': return '#C22E28';
        case 'normal': return '#A8A77A';
        case 'psychic': return '#F95587';
        case 'bug': return '#A6B91A';
        default: return 'white'
    }
}