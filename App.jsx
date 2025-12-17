export default function App() {
  const products = [
    { name: "Crochet Summer Top", price: 1500 },
    { name: "Handmade Crochet Bag", price: 2500 },
    { name: "Crochet Lessons (Beginner)", price: 3000 },
  ];

  const checkout = () => {
    const text = products.map(p => `${p.name} - KES ${p.price}`).join("%0A");
    window.open(`https://wa.me/254705818258?text=Hello,%20I%20want%20to%20order:%0A${text}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>🧶 MADE BY REEN</h1>
      <p>Handmade crochet clothes, bags & crochet lessons</p>
      <ul>
        {products.map((p,i) => (
          <li key={i}>{p.name} – KES {p.price}</li>
        ))}
      </ul>
      <button onClick={checkout}>Order via WhatsApp</button>
    </div>
  );
}
