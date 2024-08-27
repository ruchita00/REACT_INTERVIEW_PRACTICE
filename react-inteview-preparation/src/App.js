import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Search from "./pages/Search";
import Todo from "./pages/Todo";
import Pagination from "./pages/Pagination";
import Tabs from "./pages/Tabs";
import StopWatch from "./pages/StopWatch";
import Table from "./pages/Table";
import Accordion from "./pages/Accordion";
import InfiniteScroll from "./pages/InfiniteScroll";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Progress from "./pages/Progress";
import EmojiSearch from "./pages/EmojiSearch";
import TodoNew from "./pages/TodoNew";
import StarRating from "./pages/StarRating";
import Carousel from "./pages/Carousel";
import TodoList from "./pages/TodoList";
import PasswordInput from "./pages/PasswordInput";
import Dummy from "./pages/Dummy";
import Dropdown from "./pages/Dropdown";
import Hoc from "./pages/Hoc";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { element: <Home />, path: "/" },
        { element: <Search />, path: "/search" },
        { element: <Todo />, path: "/todo" },
        { element: <Pagination />, path: "/pagination" },
        { element: <Tabs />, path: "/tabs" },
        { element: <InfiniteScroll />, path: "/infiniteScroll" },
        { element: <StopWatch />, path: "/stopwatch" },
        { element: <Table />, path: "/table" },
        { element: <Accordion />, path: "/accordion" },
        { element: <StopWatch />, path: "/stopwatch" },
        { element: <Form />, path: "/form" },
        { element: <Progress />, path: "/progress" },
        { element: <EmojiSearch />, path: "/emoji" },
        { element: <TodoNew />, path: "/todonew" },
        { element: <StarRating totalStars={5} />, path: "/star" },
        { element: <Carousel />, path: "/carousel" },
        { element: <TodoList />, path: "/todolist" },
        { element: <PasswordInput />, path: "/password" },
        { element: <Dummy totalStars={5} />, path: "/dummy" },
        { element: <Dropdown />, path: "/dropdown" },
        { element: <Hoc />, path: "/hoc" },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
