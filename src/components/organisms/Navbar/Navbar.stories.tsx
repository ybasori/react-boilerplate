import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

//👇 This default export determines where your story goes in the story list

const mockStore = configureStore([]);
const meta: Meta<typeof Navbar> = {
  title: "Organisms/Navbar",
  component: (props) => {
    const store = mockStore({
      auth: {
        authData: props.loggedIn
          ? {
              name: props.name,
              expires: 0,
              token: "dfasdf",
            }
          : null,
        loading: false,
        error: null,
      },
    });
    return (
      <Provider store={store}>
        <MemoryRouter>
          <Navbar {...props} />
        </MemoryRouter>
      </Provider>
    );
  },
  argTypes: {
    loggedIn: {
      controls: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar & { name: string; loggedIn: boolean }>;

export const Default: Story = {
  args: {
    name: "Yusuf",
    loggedIn: false,
  },
};
