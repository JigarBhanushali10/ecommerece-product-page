import { Inter } from "next/font/google";
import Header from "@/app/core/layouts/Header";
import GlobalStore from "@/app/shared/contexts/GlobalStore";
import CartContextProvider from "@/app/shared/contexts/CartContext";
import ProductPage from "@/app/shared/components/ProductPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <GlobalStore>
      <CartContextProvider>
        <div className="container-xxl p-0 h-100">
          <div className="d-flex flex-column h-100">
            <Header></Header>
            <main className="flex-grow-1 overflow-auto">
              <ProductPage></ProductPage>
            </main>
          </div>
        </div>
      </CartContextProvider>
    </GlobalStore>
  );
}
