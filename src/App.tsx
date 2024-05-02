import { router } from "@/router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";
import { Toaster } from "react-hot-toast";
import { CartContextProvider } from "./context/card.context";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <JotaiProvider>
          <RouterProvider router={router} />
          <Toaster />
        </JotaiProvider>
      </CartContextProvider>
    </QueryClientProvider>
  );
}

export default App;
