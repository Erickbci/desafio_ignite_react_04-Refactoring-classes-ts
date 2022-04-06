import { useState, useEffect } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';
import api from '../../services/api';


interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  isAvailable: boolean;  
  image: string;
}

interface FoodFunctionPorps {
  handleEditFood: () => void;
  handleDelete: ()=> void;
  foodObject: ()=> Promise<void>;
}

  export function Food(props: FoodProps) {

    const [food, setFood] = useState<FoodProps[]>([])
  // constructor(props) {
  //   super(props);

  //   const { available } = this.props.food;
  //   this.state = {
  //     isAvailable: available
  //   };
  // }

  

  async function toggleAvailable() {
    useEffect(() => {
      api.put(`/foods/${props.id}`, {
        ...food,
        available: !props.isAvailable,
      });
    }, [])
  }

  function setEditingFood({handleEditFood}: FoodFunctionPorps) {
    handleEditFood();
  }
  
    // const { isAvailable } = this.state;
    // const { food, handleDelete } = this.props;

    return (
      <Container available={props.isAvailable}>
        <header>
          <img src={props.image} alt={props.name} />
        </header>
        <section className="body">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <p className="price">
            R$ <b>{props.price}</b>
          </p>
        </section>
        <section className="footer">
          <div className="icon-container">
            <button
              type="button"
              className="icon"
              onClick={() =>setEditingFood}
              data-testid={`edit-food-${props.id}`}
            >
              <FiEdit3 size={20} />
            </button>

            <button
              type="button"
              className="icon"
              // onClick={() => handleDelete(props.id)}
              data-testid={`remove-food-${props.id}`}
            >
              <FiTrash size={20} />
            </button>
          </div>

          <div className="availability-container">
            <p>{props.isAvailable ? 'Disponível' : 'Indisponível'}</p>

            <label htmlFor={`available-switch-${props.id}`} className="switch">
              <input
                id={`available-switch-${props.id}`}
                type="checkbox"
                checked={props.isAvailable}
                onChange={toggleAvailable}
                data-testid={`change-status-food-${props.id}`}
              />
              <span className="slider" />
            </label>
          </div>
        </section>
      </Container>
    );
  
};

export default Food;
