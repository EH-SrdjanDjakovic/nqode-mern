import { IconHome, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { Quotes } from "./features/quotes/Quotes";
import { AppShell, Text, Group, Input, Image, Menu } from "@mantine/core";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartInfo from "./components/CartInfo";

const App = () => {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Quotes />
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://react-redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://reselect.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reselect
          </a>
        </span>
      </header>
    </div>*/
    <AppShell header={{ height: 60 }} footer={{ height: 60 }} padding='md'>
      <AppShell.Header style={{ backgroundColor: "#043038" }}>
        <Group h='100%' px='md' justify='space-between'>
          <Group>
            <Image h={40} w={200} src='https://nqode.io/wp-content/themes/nQode_theme/img/nQode-logo-white.svg'></Image>
            <Text size='lg' c='white'>
              Assignment task
            </Text>
          </Group>
          <Group>
            <Link to='/'>
              <IconHome size={24} color='white' />
            </Link>
            <CartInfo></CartInfo>
            <Input placeholder='Search' leftSection={<IconSearch size={16} />} />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/product-details/:id' element={<div>product details</div>} />
          <Route path='/cart-details' element={<div>cart details</div>} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
