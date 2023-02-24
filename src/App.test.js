import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
// import { render, screen } from '@testing-library/react';

import NavBar from './components/Nav';
import { AnimateAliExpressLargeIcon, AnimateAliExpressIcon, AnimateAmazonIcon, AnimateAmazonLargeIcon } from './components/AnimateIcons';
import SearchForm from './components/SearchTemplate';
import ModalDialog from './components/Modal';

// App imgs load
  describe('<App>', () => {
    let wrapper;

    it('renders without crashing', () => {
      wrapper = shallow(<App />);
    });
  });

// nav renders
  describe('<Navbar>', () => {
    let wrapper;

    it('renders without crashing', () => {
      wrapper = shallow(<NavBar />);
      })

    it('should render the two buttons class "nav-item', () => {
      expect(wrapper.find('.nav-item')).toHaveLength(2);
    });

    })

// on page for individual stores
  describe("<ChooseStore/>", () => {
    
    it('should render large aliExpress icon', () => {
      const icon = shallow(<AnimateAliExpressLargeIcon/>);
      expect(icon.find("img").prop('src')).toBe('/myIcons/aliexpress-lrg.svg');
      expect(icon.find("img").prop('alt')).toBe('AliExpress Icon');
    });

    it('should render Logo', () => {
      const icon = shallow(<AnimateAmazonLargeIcon/>);
      expect(icon.find("img").prop('src')).toBe('/myIcons/amazon-lrg.svg');
      expect(icon.find("img").prop('alt')).toBe('Amazon Icon');
    });
  })

// on page for comparison
describe("<ChooseStore/>", () => {
    
  it('should render large aliExpress icon', () => {
    const icon = shallow(<AnimateAliExpressIcon/>);
    expect(icon.find("img").prop('src')).toBe('/myIcons/aliexpress.svg');
    expect(icon.find("img").prop('alt')).toBe('');
  });

  it('should render Logo', () => {
    const icon = shallow(<AnimateAmazonIcon/>);
    expect(icon.find("img").prop('src')).toBe('/myIcons/amazon.svg');
    expect(icon.find("img").prop('alt')).toBe('');
  });
})
 
// Unit test: when user fills and submits form, that it triggers the right funcs
  describe('<SearchForm/>', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();
    const wrapper = shallow(
          <SearchForm
            search=""
            handleFormSubmit={handleSubmit}
            handleInputChange={handleChange}
          />
        );

    it('validates submission on button click', () => {
        const submitBtn = wrapper.find('button')
        submitBtn.simulate('click')
        expect(handleSubmit).toHaveBeenCalled();
      });

    it('validates change on user input', () => {
      const inputField = wrapper.find('input')
      inputField.simulate("change", { target: { value: "foo" }})
      expect(handleChange).toHaveBeenCalled();
    });
  })

// test that modals render correctly
describe('<ModalDialog/>',() => {
  let wrapper;
  beforeEach(() => {
      const container = document.createElement("div");
      document.body.appendChild(container);
      wrapper = shallow( <ModalDialog isOpen={true}/> , {attachTo: container});
  });

  it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();

      expect(wrapper.find('ModalHeader')).toHaveLength(1);

      expect(wrapper.find('ModalBody')).toHaveLength(1);
  });

})