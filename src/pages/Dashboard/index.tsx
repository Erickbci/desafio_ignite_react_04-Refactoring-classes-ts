import { Component, useState } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';

interface DashboardProps {
  foods: [],
  editingFood: {},
  modalOpen: false,
  editModalOpen: false,
}

interface FoodProps {
    id: number,
    name: string,
    description: string,
    price: string,
    isAvailable: boolean,  
    image: string,
  }
  export function Dashboard(props: DashboardProps){

    const [food, setFood] = useState<FoodProps[]>([])
  // async componentDidMount() {
  //   const response = await api.get('/foods');

  //   this.setState({ foods: response.data });
  // }

  // handleAddFood = async food => {
  //   const { foods } = this.state;

  //   try {
  //     const response = await api.post('/foods', {
  //       ...food,
  //       available: true,
  //     });

  //     this.setState({ foods: [...foods, response.data] });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

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

  async function handleDeleteFood(props: FoodProps){
    // const { foods } = this.state;

    const foodsFiltered = food.filter(food => food.id !== id);
    const response = await api.delete(`/foods/${food.id}`);
    const {foods} = response.data

    

    setFood(foodsFiltered)
  }

  // toggleModal = () => {
  //   const { modalOpen } = this.state;

  //   this.setState({ modalOpen: !modalOpen });
  // }

  // toggleEditModal = () => {
  //   const { editModalOpen } = this.state;

  //   this.setState({ editModalOpen: !editModalOpen });
  // }

  function handleEditFood(){
    ({ editingFood: food, editModalOpen: true });
  }

  
    const { modalOpen, editModalOpen, editingFood, foods } = this.state;

    return (
      <>
        <Header openModal={this.toggleModal} />
        <ModalAddFood
          isOpen={modalOpen}
          setIsOpen={this.toggleModal}
          handleAddFood={this.handleAddFood}
        />
        <ModalEditFood
          isOpen={editModalOpen}
          setIsOpen={this.toggleEditModal}
          editingFood={editingFood}
          handleUpdateFood={this.handleUpdateFood}
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
        </FoodsContainer>
      </>
    );
  }
;

