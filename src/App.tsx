// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesList from './components/ExpensesList/ExpensesList';
import React, { useCallback, useState } from 'react';
import ExpensesChart from './components/ExpensesChart/ExpensesChart';
import Button from './components/UI/Button/Button';
import Auth from './components/Auth/Auth';
import { AuthContextProvider } from './context/auth/auth-context';
import useHttp from './hooks/use-http';
import Input from './components/UI/Input/Input';
import MainHeader from './components/MainHeader/MainHeader';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductsList from './components/ProductsList/ProductsList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import MyStore from './components/MyStore/MyStore';

const defaultItems = [
  {
    id: '1',
    title: 'Car Insurance',
    price: 240.9,
    date: new Date(2021, 2, 28),
  },
  {
    id: '2',
    title: 'Milk',
    price: 6,
    date: new Date(2021, 2, 25),
  },
  {
    id: '3',
    title: 'Large Bed',
    price: 580,
    date: new Date(2021, 2, 22),
  },
  {
    id: '4',
    title: 'iPhone XS Max',
    price: 890.99,
    date: new Date(2021, 2, 19),
  },
];

const requestConfig = {
  url: 'https://jsonplaceholder.typicode.com/todos/',
};

function App() {
  const [items, setItems] = useState(defaultItems);
  const [todos, setTodos] = useState([]);

  const newExpenseHandler = (newExpense: any) => {
    setItems(state => ([...state, newExpense]));
  };

  const applyData = (data: any) => {
    console.log('Apply data...');
    setTodos(data);
  };

  const sendRequest = () => {
    fetchTasks(requestConfig, applyData);
  };

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  return (
    <AuthContextProvider>
      <div className="App">
        <MainHeader />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <ExpensesChart items={items} />
            <NewExpense onNewExpense={newExpenseHandler} />
            <ExpensesList items={items} />
          </Route>
          <Route path="/name">
            <Input id="name" label="Enter your name" type="text" value=""></Input>
          </Route>
          <Route path="/auth">
            <Auth></Auth>
          </Route>
          <Route path="/todos">
            <Button onClick={fetchTasks.bind(null, requestConfig, applyData)}>Get Todos</Button>
            <div>
              {isLoading && <span>Loading...</span>}
              {error && <span>{error}</span>}
              {JSON.stringify(todos)}
            </div>
          </Route>
          <Route path="/store" exact>
            <MyStore />
          </Route>
          <Route path="/products" exact>
            <ProductsList></ProductsList>
          </Route>
          <Route path="/product-detail/:productId">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <p>Page Not found!</p>
          </Route>
        </Switch>

      </div>
    </AuthContextProvider>
  );
}

export default App;
