export default function Tabs({
  children,
  buttons,
  ButtonsContainer = "default",
}) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
