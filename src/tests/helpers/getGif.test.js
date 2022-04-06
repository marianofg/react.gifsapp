import { getGifs } from "../../helpers/getGifs"

describe('prueba fech', () =>{
    test('trae 10 elementos', async() => { 

        const gifs = await getGifs('Dragon BAll');
        expect(gifs.length).toBe(10);
     })
})