import { products } from '$lib/data/products';

export const load = ({ params }: any) => {
    const product = products.find((product) => product.id === params.id);

    return {
        product: product
    };
}