/** set-up routing */
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

/** style global */
import { GlobalStyle } from "./components/global-style";

/** set-up redux */

// App để config dự án
export function App() {
  return (
    <GlobalStyle>
      <RouterProvider router={router}></RouterProvider>
    </GlobalStyle>
  );
}
