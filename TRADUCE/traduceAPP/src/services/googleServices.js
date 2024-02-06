import axios from "axios";


const detectarIdioma = async (texto) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('q', texto);

    const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'dc9070ae86msha772554de115514p1dea50jsn984f4c42e552',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
    };

    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error(error);
    }
}
const obtenerIdiomas = async () => {
    const options = {
        method: 'GET',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
        headers: {
            'X-RapidAPI-Key': 'dc9070ae86msha772554de115514p1dea50jsn984f4c42e552',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const traducirIdiomas = async (texto, target, source) =>{
const encodedParams = new URLSearchParams();
encodedParams.set('q', texto);
encodedParams.set('target', target);
encodedParams.set('source', source);

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'dc9070ae86msha772554de115514p1dea50jsn984f4c42e552',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
    const response = await axios.request(options);
    return response;
} catch (error) {
    console.error(error);
}
}

export default {
    detectarIdioma,
    obtenerIdiomas,
    traducirIdiomas
}
