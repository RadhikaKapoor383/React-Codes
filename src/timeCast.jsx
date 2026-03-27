export default function App() {
    const [text, setText] = useState("");
    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <p>Hello</p>
        </div>
        
  );
}