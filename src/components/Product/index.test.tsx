import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Product from './index.tsx'
import products from '../../mockData/products'



describe('product', () => {

    test('test render [Product Component] with correct data', () => {
        const productComponent = render(<Product {...products[0]} ></Product>);

        // 判断【移除】button是否渲染
        expect(productComponent.getByText('Remove')).toBeTruthy
    })

    test('test render [Product Component] without data', () => {
        const productComponent = render(<Product/>);
        //判断【移除】button 是否渲染
        expect(productComponent.getByText('Remove')).toBeTruthy
    })
})
