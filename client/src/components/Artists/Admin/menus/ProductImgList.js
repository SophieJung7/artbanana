import React, { Component, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

class ProductImgList extends Component {
  renderImages = () => {
    return this.props.images.map((image, index) => {
      return (
        <Image
          image={image}
          index={index}
          key={`${index}-image`}
          moveImage={this.props.moveImage}
          handleImgChange={this.props.handleImgChange}
        />
      );
    });
  };

  render() {
    return <section className='file-list'>{this.renderImages()}</section>;
  }
}

const type = 'Image'; // Need to pass which type element can be draggable

const Image = ({ image, index, moveImage, handleImgChange }) => {
  // Initialize the reference
  const ref = useRef(null);

  // useDrop hook is responsible for handling whether any item gets hovered
  // or dropped on the element
  const [, drop] = useDrop({
    // Accept will make sure only these element type can be droppable on this element
    accept: type,
    hover(item) {
      // item is the dragged element
      if (!ref.current) {
        return;
      }
      // Starting Point
      const dragIndex = item.index;
      // End point
      const hoverIndex = index;
      // If the dragged element is hovered in the same place, then do nothing
      if (dragIndex === hoverIndex) {
        return;
      }
      // If it is dragged around other elements,
      // then move the image and set the state with position changes
      moveImage(dragIndex, hoverIndex);
      /*
        Update the index for dragged item directly to avoid flickering
        when the image was half dragged into the next
      */
      item.index = hoverIndex;
    },
  });

  // useDrag will be responsible for making an element draggable.
  // It also expose, isDragging method to add any styles while dragging
  const [{ isDragging }, drag] = useDrag({
    // item denotes the element type, unique identifier (id) and the index (position)
    item: { type, id: image.id, index },
    // collect method is like an event listener,
    // it monitors whether the element is dragged and expose that information
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // initialize drag and drop into the element
  drag(drop(ref));

  return (
    <li ref={ref} style={{ opacity: isDragging ? 0 : 1 }} className='file-item'>
      <div className='box-input-file'>
        <input
          className='upload'
          type='file'
          onChange={(e) => handleImgChange(e, index)}
        />
        <img
          src={image.img}
          className='file-img'
          style={{ width: 50, height: 50 }}
          alt='products'
        />
      </div>
      {/* <div className='btn btn-solid ml-2'>삭제하기</div> */}
    </li>
  );
};

export default ProductImgList;
