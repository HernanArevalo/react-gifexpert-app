import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp"

describe('GifExpertApp tests', ()=>{

    test('snapshot', () => {
        
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar una lista de categorias', () => {

        const categories = ['The office', 'Brooklyn 99']

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )

    })

});