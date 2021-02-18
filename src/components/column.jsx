import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Product from './product';

const Container = styled.div`
    margin: 8px;
    border-radius: 2px;
    width: 50%;
    min-height: 195px;
`;
const Title = styled.h3`
    text-align: center;
`;
const ProductList = styled.div`
    padding: 8px;
`;

const Column = ({day, products})=> {
        return (
            <Container>
                <Title>{day.title}</Title>
                <Droppable droppableId={day.id}>
                    {(provided) => (
                        <ProductList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {products.map((product, index) => (
                                <Product key={product.id} product={product} index={index} />
                            ))}
                            {provided.placeholder}
                        </ProductList>
                    )}
                </Droppable>
            </Container>
        );
    }


export default Column