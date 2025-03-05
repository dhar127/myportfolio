import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const CustomHook = (refTab = null, refList = null) => {
  const scrollTab = refTab;
  const divs = refList;
  const activeTab = useSelector(state => state.activeTab);

  useEffect(() => {
    if (scrollTab?.current?.classList.contains(activeTab)) {
      scrollTab.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (divs?.current) {
      divs.current.forEach((div) => {
        div.classList.add('animation');
      });

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        divs.current.forEach((div) => {
          const offsetTop = div.getBoundingClientRect().top + scrollPosition;
          if (scrollPosition >= offsetTop - window.innerHeight / 1.5) {
            div.classList.add('active');
          } else {
            div.classList.remove('active');
          }
        });
      };

      // Add event listener
      window.addEventListener('scroll', handleScroll);

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [activeTab, scrollTab, divs]); // Include missing dependencies

};

export default CustomHook;
