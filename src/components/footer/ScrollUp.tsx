import CheveronDoubleUp from '@heroicons/react/24/outline/ChevronDoubleUpIcon';
import { useEffect } from 'react';

type Props = {};

const ScrollUp = (props: Props) => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 200;
    const scrollUp = document.querySelector('.scroll__up');
    if (scrollY > threshold) {
      scrollUp?.classList.add('show-scroll');
    } else {
      scrollUp?.classList.remove('show-scroll');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="#home" className="scroll__up">
      <CheveronDoubleUp
        style={{ color: 'var(--text-color)', width: '24px', height: '24px' }}
        className="wheel"
      />
    </a>
  );
};

export default ScrollUp;
