import React from "react";
import {act, create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";
import {Provider} from "react-redux";
import {store} from "../../../Redux/redux-store";

test('status from props should be in the state', async ()=>{
    const component = create(<Provider store={store}><ProfileStatus/></Provider>);
    const root = component.root;
    let span = await root.findByType("span")
    expect(span.children.length).toBe(1);
})

test('input', async ()=>{
    const component = create(<Provider store={store}><ProfileStatus/></Provider>);
    const root = component.root;
    let span = await root.findByType("span")
    act(() => {
        span.props.onDoubleClick();
    })
    let input = await root.findByType("input")
    expect(input.children.length).toBe(0);
})