type RoleSelectionProps = {
  setRole: (role: string) => void;
};

function RoleSelection({ setRole }: RoleSelectionProps) {
  return (
    <main>
      <h1>Atlas OMS</h1>
      <p>Ordering & Merchandising System</p>
      <h2>Select your role</h2>

      <button onClick={() => setRole('Salesperson')}>Salesperson</button>
      <button onClick={() => setRole('Merchandiser')}>Merchandiser</button>
      <button onClick={() => setRole('Supervisor')}>Supervisor</button>
    </main>
  );
}

export default RoleSelection;
