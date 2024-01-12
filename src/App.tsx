import { router } from "@/router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <RouterProvider router={router} />
      </JotaiProvider>
    </QueryClientProvider>
  );
}

export default App;
