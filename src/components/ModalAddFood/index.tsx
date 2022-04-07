import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface DashboardProps {
  foods: [],
  editingFood: {},
  modalOpen: false,
  editModalOpen: false,
}

interface ModalAddFoodProps {
  isOpen: Boolean;
  setIsOpen: ()=> void;
  handleAddFood: (props: DashboardProps)=> Promise<void>;
}

export function ModalAddFood(props: ModalAddFoodProps) {
  const formRef = useRef(null);

  async function handleSubmit(data: DashboardProps)  {
    props.handleAddFood(data);
    props.setIsOpen();
  };

    return (
      <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input icon name="image" placeholder="Cole o link aqui" />

          <Input icon name="name" placeholder="Ex: Moda Italiana" />
          <Input icon name="price" placeholder="Ex: 19.90" />

          <Input icon name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

