export default function CoreConcept({
  title = "no title",
  description,
  image,
}) {
  //using destructuring syntax, than using parent parameter, like props.image ext
  //this get called in another componen function, and get parameter value," <CoreConcept title="Components" ...." , <= is called props
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
