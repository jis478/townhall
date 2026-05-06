/* global React, ReactDOM, Header, Footer, HomePage, InsurancePage, DoctorsPage, ClinicPage, OshcPage */
const { useState: useStateApp } = React;

function getInitialPage() {
  const hash = window.location.hash;
  if (hash === '#insurance') return 'insurance';
  if (hash === '#doctors') return 'doctors';
  if (hash === '#clinic') return 'clinic';
  if (hash === '#oshc') return 'oshc';
  return 'home';
}

function App() {
  const [page, setPage] = useStateApp(getInitialPage());

  const navigate = (target) => {
    setPage(target);
    window.location.hash = target === 'home' ? '' : '#' + target;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <Header active={page} onNavigate={navigate} />
      {page === 'home'      && <HomePage      onNavigate={navigate} />}
      {page === 'insurance' && <InsurancePage  onNavigate={navigate} />}
      {page === 'doctors'   && <DoctorsPage    onNavigate={navigate} />}
      {page === 'clinic'    && <ClinicPage     onNavigate={navigate} />}
      {page === 'oshc'      && <OshcPage       onNavigate={navigate} />}
      <Footer onNavigate={navigate} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
