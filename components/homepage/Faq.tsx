import { faq } from '@/constants/index';
import FaqList from './FaqList';

const Faq = () => {
  return (
    <section className="section container mx-auto">
      <h2 className="sub-title mb-12">
        Questions Fréquentes <br className="hidden sm:block" /> sur votre garage
        à Bergerac
      </h2>
      <FaqList faq={faq} />
    </section>
  );
};

export default Faq;
