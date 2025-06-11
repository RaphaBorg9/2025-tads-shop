<<<<<<< HEAD


export default async function HomePage() {
   let response = await fetch("http://localhost:3002/marcas");
    let marcas = await response.json();
  return (
    <div className="p-4">
      <h1>Página Iniciall</h1>
     <ul>
=======
export default async function HomePage() {
 let response = await fetch("http://localhost:3002/marcas");
 let marcas = await response.json(); 
  return (
    <div className="p-4">
      <h1>Página Inicial</h1>
       <ul>
>>>>>>> abb584fb4adfeca91189ad3c9d722f38f8f7a411
          {marcas.map((marca) => (
            <li key={marca.id}>{marca.nome}</li>
          ))}
        </ul>
    </div>
  );
}
