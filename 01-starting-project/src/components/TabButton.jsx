export default function TabButton({ children, onSelect }) {
  console.log("APP COMPONENT EXECUTED!");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
