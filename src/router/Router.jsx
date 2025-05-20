import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import App from './../App';
import ExploreGardeners from './../pages/ExploreGardeners';
import BrowseTips from './../pages/BrowseTips';
import ShareTip from './../pages/ShareTip';
import MyTips from './../pages/MyTips';

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
    ]
  },
]);
