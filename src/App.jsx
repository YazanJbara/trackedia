import Sidebar from './components/Sidebar';

function App() {
  return (
    <article className='grid grid-cols-[4.3rem_1fr]'>
      <aside className='h-screen'>
        <Sidebar />
      </aside>

      <div className=''></div>
    </article>
  );
}

export default App;
