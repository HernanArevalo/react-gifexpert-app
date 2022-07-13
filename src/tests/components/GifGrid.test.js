import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')


describe('', ()=>{

    const category = 'One Punch'

    test('debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

            const wrapper = shallow(<GifGrid category={category}/>);
            expect( wrapper ).toMatchSnapshot();

    });

    test('debe mostrar items cuando se carga las imgs useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.png',
            title: 'cualquier cosa',
        },
        {
            id: 'DEF',
            url: 'https://localhost/cualquier/cosa.png',
            title: 'cualquier cosa',
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
    
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })

})