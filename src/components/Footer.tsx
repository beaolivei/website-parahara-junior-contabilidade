import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Junior Contabilidade & Assessoria Rural Ltda. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Desenvolvido com expertise para o agronegócio.</p>
      </div>
    </footer>
  );
};

export default Footer;
