import { valueAboutPage } from '@/constants';
import Image from 'next/image';

const Values = () => {
  return (
    <section className="lg:max-w-7xl mx-auto px-[20px] section flex-col-center gap-8 bg-zinc-200/50 rounded-xl">
      <h2 className="sub-title">Engagement et valeurs</h2>
      <p className="description">
        L’Atelier de Jimmy s’appuie sur des valeurs fortes qui guident chaque
        intervention. Jimmy considère que chaque voiture mérite une attention
        particulière, et que chaque client doit repartir en toute sérénité, avec
        la certitude d’avoir été compris et bien conseillé.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {valueAboutPage.map(({ title, text, icon }, index) => (
          <li
            key={index}
            className="flex-col-center gap-6 border border-primary/50 rounded-lg p-6"
          >
            <Image
              src={icon}
              alt={title}
              className="p-2 bg-secondary rounded-xl flex items-center"
              width={60}
              height={60}
            />
            <h3 className="text-lg text-neutral-900 font-bold">{title}</h3>

            <p className="text-center text-neutral-800">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Values;
