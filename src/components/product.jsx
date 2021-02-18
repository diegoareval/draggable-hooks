import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 2px;
    background-color: #fff;
    float: left;
    box-sizing: border-box;
    text-align: center;
    font-size: 15px;
`;


const Product =({product, index}) => {
        return (
            <Draggable draggableId={product.id} index={index}>
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <img src={product.content} alt="menu" style={{'width': '100px'}} /><br />
                        ${product.price}
                    </Container>
                )}
            </Draggable>
        );
    }

export default Product