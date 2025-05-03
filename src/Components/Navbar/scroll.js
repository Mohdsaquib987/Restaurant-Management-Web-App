export const handleScroll = (e, id, location, navigate) => {
  e.preventDefault();

  const scrollToSection = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (location.pathname !== '/') {
    navigate('/');
    setTimeout(scrollToSection, 300); // give time for page to load
  } else {
    scrollToSection();
  }
};
