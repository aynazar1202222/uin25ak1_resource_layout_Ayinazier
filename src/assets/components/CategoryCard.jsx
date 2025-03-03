export default function CategoryCard({ item }) {
  //const { slug } = useParams();

  return (
    <article className="gameCard">
      <h3>{item.name}</h3>
      <Link to={item.id}>Les mer {item.name}</Link>
    </article>
  );
}