import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from "react";
import { Product } from "@/data/products";

export type QuoteItem = {
  id: string;
  sku: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  qty: number;
};

type Ctx = {
  items: QuoteItem[];
  count: number;
  total: number;
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const QuoteCartContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "ait_quote_cart_v1";

export const QuoteCartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add: Ctx["add"] = (p, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === p.id);
      if (existing) {
        return prev.map((i) =>
          i.id === p.id ? { ...i, qty: Math.min(99, i.qty + qty) } : i
        );
      }
      return [
        ...prev,
        { id: p.id, sku: p.sku, name: p.name, brand: p.brand, price: p.price, image: p.image, qty },
      ];
    });
    setOpen(true);
  };

  const remove: Ctx["remove"] = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const setQty: Ctx["setQty"] = (id, qty) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, Math.min(99, qty)) } : i))
    );

  const clear = () => setItems([]);

  const { count, total } = useMemo(() => {
    let c = 0;
    let t = 0;
    for (const i of items) {
      c += i.qty;
      t += i.qty * i.price;
    }
    return { count: c, total: t };
  }, [items]);

  return (
    <QuoteCartContext.Provider value={{ items, count, total, add, remove, setQty, clear, open, setOpen }}>
      {children}
    </QuoteCartContext.Provider>
  );
};

export const useQuoteCart = () => {
  const ctx = useContext(QuoteCartContext);
  if (!ctx) throw new Error("useQuoteCart must be used within QuoteCartProvider");
  return ctx;
};
