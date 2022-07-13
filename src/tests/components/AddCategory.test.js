import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCattegory } from "../../components/AddCattegory";


describe('Pruebas en <AddCategory/>', ()=>{
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCattegory setCategories={setCategories}/>);
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCattegory setCategories={setCategories}/>);
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
 
    test('debe cambiar la caja de texto', ()=>{

        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim()).toBe( value );


    });

    test('No debe postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('llamar el setCategories y limpiar el imput', () => {

        // Simular inputChange
        
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', { target: { value } });
        
        expect( wrapper.find('p').text().trim()).toBe( value );
        
        // Simular Submit

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // setCategories se debe haber llamado
        
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function)  );

        // expect( wrapper.find('p').text().trim()).toBe( '' );


        // El valor del input debe estar en ''

        expect(wrapper.find('input').prop('value')).toBe('')

    });


})