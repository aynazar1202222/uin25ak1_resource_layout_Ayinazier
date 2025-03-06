export default function Login() {
  return (
    <section>
      <h1>Logg in</h1>
      <form>
        Bruker navn
        <label>
          <input type="text" placeholder="Aynazar..." />
        </label>
        <label>
          Passord
          <input type="passeword" placeholder="*********" />
        </label>
        <button>Logg inn</button>
      </form>
    </section>
  );
}
