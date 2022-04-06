import {shallow} from 'enzyme'
import {GifGridItem} from "../../components/GifGridItem"

describe( 'Pruebas en GifGridItem',() =>{

    const titulo = 'un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem titulo={titulo} url={url}></GifGridItem>)
    test('mostramos el coponente', () => { 
        
        expect(wrapper).toMatchSnapshot();
     })

     test('titulo en un parrafo', () => { 
         const p = wrapper.find('p');
         expect(p.text().trim()).toBe(titulo);
      })
})
