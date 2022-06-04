import sneakPeek1 from './1.png'
import sneakPeek2 from './2.png'
import sneakPeek3 from './3.png'
import sneakPeek4 from './4.png'
import sneakPeek5 from './5.png'
import sneakPeek6 from './6.png'
import sneakPeek7 from './7.png'
import sneakPeek8 from './8.png'
import sneakPeek9 from './9.png'
import sneakPeek10 from './10.png'
import sneakPeek11 from './11.png'
import sneakPeek12 from './12.png'

function importAll(r) {
    return r.keys().map(r);
}

var images = []
const updateImage = () => {
    images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

}
const sneakPeeksList = [
    sneakPeek1,
    sneakPeek2,
    sneakPeek3,
    sneakPeek4,
    sneakPeek5,
    sneakPeek6,
    sneakPeek7,
    sneakPeek8,
    sneakPeek9,
    sneakPeek10,
    sneakPeek11,
    sneakPeek12,


]
export {
    updateImage,
    sneakPeeksList,
    images
}