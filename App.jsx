import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 0,
    name: "Crochet Lessons (Beginner)",
    price: 3000,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 1,
    name: "Crochet Summer Top",
    price: 1500,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 2,
    name: "Handmade Crochet Bag",
    price: 2500,
    image: "https://images.unsplash.com/photo-1593032457869-3c1b1f8b2f09",
  },
  {
    id: 3,
    name: "Crochet Cardigan",
    price: 3500,
    image: "https://images.unsplash.com/photo-1520974741539-6a8e4a42aa32",
  },
];

export default function CrochetShop() {
  const [cart, setCart] = useState([]);

  const profile = {
    name: "Reen",
    phone: "0705 818 258",
    bio: "I create handmade crochet clothes, bags, and teach crochet lessons for beginners and intermediates.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const checkout = () => {
    const message = cart
      .map((p) => `${p.name} - KES ${p.price}`)
      .join("%0A");

    window.open(
      `https://wa.me/254705818258?text=Order:%0A${message}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <img
            src={profile.image}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">🧶 MADE BY REEN</h1>
            <p className="text-sm text-neutral-500">
              Handmade crochet • Lessons available
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ShoppingCart />
          <span>{cart.length}</span>
        </div>
      </header>

      <section className="mb-10">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
          className="w-full h-72 object-cover rounded-2xl shadow"
        />
        <p className="mt-4 text-lg text-center max-w-2xl mx-auto">
          {profile.bio}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="h-60 w-full object-cover rounded-t-2xl"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg font-bold">KES {product.price}</p>
              <Button
                className="mt-3 w-full"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6">
          <Button
            size="lg"
            className="rounded-2xl shadow-xl"
            onClick={checkout}
          >
            Checkout via WhatsApp
          </Button>
        </div>
      )}

      <footer className="mt-16 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} MADE BY REEN · Contact: {profile.phone} ·
        WhatsApp orders welcome
      </footer>
    </div>
  );
}
