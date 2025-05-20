import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import App from './../App';
import ExploreGardeners from './../pages/ExploreGardeners';
import BrowseTips from './../pages/BrowseTips';
import ShareTip from './../pages/ShareTip';
import MyTips from './../pages/MyTips';
import Login from './../pages/Login';
import Register from './../pages/Register';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {index: true, Component: App},
      {path: 'ExploreGardeners', Component: ExploreGardeners},
      {path: 'BrowseTips', Component: BrowseTips},
      {path: 'ShareTip', Component: ShareTip},
      {path: 'MyTips', Component: MyTips},
      {path: 'login', Component: Login},
      {path: 'register', Component: Register},
    ]
  },
]);
