import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import { todosRemainingSelector, todoListSelector } from '../../redux/selectors';

// import { searchTextSelector } from '../../redux/selectors';
export default function TodoList() {
  const [todoName, setTodoName] = useState('');

  const [priority, setPriority] = useState('Medium');

  const todoList = useSelector(todosRemainingSelector);  // là 1 function lấy dữ liệu trả về từ cái kho chung
  console.log('first todoList', todoList)

  // console.log('todoList', {todoList});
  const dispatch = useDispatch();

  // Event handler
  const handleAddButtonClick = () => {
    // dispatch
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false,
    }))

    setTodoName('');
    setPriority('Medium');
  }

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setTodoName(e.target.value);
  }

  // Ant Design --> value = value
  const handlePriorityChange = (value) => {
    // console.log(value);
    setPriority(value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map((todo) => {
          return (
            <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />
          )
        })}

      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact  >
          <Input value={todoName}  onChange = {handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange} >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick} >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
