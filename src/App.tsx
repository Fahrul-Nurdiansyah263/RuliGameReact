import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import DetailPage from "@/pages/DetailPage";
import FavoritePage from "@/pages/FavoritePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-[#FAF9F5] text-zinc-950 selection:bg-yellow-300 selection:text-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:id" element={<DetailPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;