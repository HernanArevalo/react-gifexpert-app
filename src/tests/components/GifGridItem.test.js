import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem/>', ()=>{

    const title = 'Un titulo';
    const url = 'hhtps://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe tener un parrafo con el texto', () => {

        const p = wrapper.find('p')

        expect( p.text().trim() ).toBe(title)
    })

    test('Debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img')

        expect(img.prop('alt')).toBe(title)
        expect(img.prop('src')).toBe(url)
    })

    test('Div debe tener la clases animate__fadeIn', () => {
        
        const div = wrapper.find('div')
        const divClass = wrapper.find('div').prop('className')

        expect( divClass.includes('animate__fadeIn') ).toBe( true )


    })

})