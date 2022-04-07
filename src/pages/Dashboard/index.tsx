import { Component, useState } from 'react';

import {Header} from '../../components/Header';
import api from '../../services/api';
import Food from '../../components/Food';
import {ModalAddFood} from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';

interface DashboardProps {
  foods: [],
  editingFood: {},
  modalOpen: false,
  editModalOpen: false,
}

interface FoodProps {
    id: Number;
    name: String;
    description: String;
    price: String;
    isAvailable: Boolean;  
    image: String;
  }
  export function Dashboard(props: DashboardProps){

    const [food, setFood] = useState<FoodProps[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
  // async componentDidMount() {
  //   const response = await api.get('/foods');

  //   this.setState({ foods: response.data });
  // }

  async function handleAddFood(props: DashboardProps){

    try {
      const response = await api.post('/foods', {
        ...food,
        available: true,
      });

      setFood(...props.foods, response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // handleUpdateFood = async food => {
  //   const { foods, editingFood } = this.state;

  //   try {
  //     const foodUpdated = await api.put(
  //       `/foods/${editingFood.id}`,
  //       { ...editingFood, ...food },
  //     );

  //     const foodsUpdated = foods.map(f =>
  //       f.id !== foodUpdated.data.id ? f : foodUpdated.data,
  //     );

  //     this.setState({ foods: foodsUpdated });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async function handleDeleteFood(props: FoodProps){

  //   const foodsFiltered = food.filter(food => food.id !== props.id);
  //   const response = await api.delete(`/foods/${props.id}`);
  //   const { foods } = response.data

  //   setFood(foodsFiltered)
  // }

  function toggleModal() {
    setIsModalOpen(!isModalOpen)
  }

  // toggleEditModal = () => {
  //   const { editModalOpen } = this.state;

  //   this.setState({ editModalOpen: !editModalOpen });
  // }

  // function handleEditFood(){
  //   ({ editingFood: food, editModalOpen: true });
  // }

  
  //   const { modalOpen, editModalOpen, editingFood, foods } = this.state;

    return (
      <>
        <Header 
        openModal={toggleModal}
         />
         <ModalAddFood
          isOpen={isModalOpen}
          setIsOpen={toggleModal}
          handleAddFood={handleAddFood}
        />
        {/*
        <ModalEditFood
          isOpen={editModalOpen}
          setIsOpen={toggleEditModal}
           editingFood={editingFood}
          handleUpdateFood={handleUpdateFood}
        />

        <FoodsContainer data-testid="foods-list">
          {foods &&
            foods.map(food => (
              <Food
                key={food.id}
                food={food}
                handleDelete={handleDeleteFood}
                handleEditFood={handleEditFood}
              />
            ))}
        </FoodsContainer> */}
      </>
    );
  }
;

