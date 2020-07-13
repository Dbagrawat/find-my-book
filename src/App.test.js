import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Search from "./components/Search";
import NoBooksFound from "./components/NoBooksFound";

configure({
    adapter: new Adapter(),
});

describe("App component", () => {
    it("Renders correctly", () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});

describe("NoResults Component", () => {
    const component = shallow(<NoBooksFound />);

    describe("Should render without errors", () => {
        it("Should render div element", () => {
            const elem = component.find("div");
            expect(elem.length).toBe(1);
        });

        it("Should render Paragraph element", () => {
            const elem = component.find("p");
            expect(elem.length).toBe(1);
        });

        it("Should render Button element", () => {
            const elem = component.find("button");
            expect(elem.length).toBe(1);
        });
    });

    describe("Should render correct text", () => {
        // it("Should render No Books found text", () => {
        //     const elem = component.find("p");
        //     const text = "Sorry there are no books to show.";
        //     expect(elem.text()).toEqual(text);
        // });

        it("Should render Button element", () => {
            const elem = component.find("button");
            const text = "Refresh";
            expect(elem.text()).toEqual(text);
        });
    });
});

/* Search Component */

const setUp = (props = {}) => {
    const component = shallow(<Search {...props} />);
    return component;
};

describe("Search  Component", () => {
    let component;

    beforeEach(() => {
        component = setUp();
    });

    describe("Should render without errors", () => {
        it("Should render Form element", () => {
            const elem = component.find("form");
            expect(elem.length).toBe(1);
        });

        it("Should render Button element", () => {
            const elem = component.find("button");
            expect(elem.length).toBe(1);
        });
    });
});
