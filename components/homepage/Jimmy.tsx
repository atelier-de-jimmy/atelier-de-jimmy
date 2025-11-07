import { JimmyHomepage } from '@/constants';
import { twMerge } from 'tailwind-merge';

const Jimmy = () => {
  return (
    <section className="container section flex-col-center gap-16">
      <div className="flex-col-center gap-8">
        <h2 className="sub-title">
          Jimmy Feltman
          <br />
          Votre Garagiste à Bergerac
        </h2>
        <p className="description">
          Passionné d’automobile depuis toujours, Jimmy Feltmann met son
          expérience et son savoir-faire au service de chaque client avec la
          même exigence : offrir un travail honnête, soigné et durable.
        </p>
        <p className="description">
          Artisan garagiste diplômé en électromécanique, il a bâti au fil des
          années une relation de confiance et de proximité avec ses clients, qui
          saluent autant sa compétence technique que sa bienveillance et son
          sens du service.
        </p>
      </div>
      <div className="flex-col-center">
        <h3 className="sub-title-section">
          🤝 Les engagements <br className="sm:hidden" /> de l’Atelier de Jimmy
        </h3>
        <ul className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl gap-6 mt-12">
          {JimmyHomepage.map(({ title, text, imgPath, className }, index) => (
            <li
              key={index}
              style={{ backgroundImage: `url(${imgPath})` }}
              className={twMerge(
                'flex flex-col justify-end bg-cover bg-center rounded-xl p-6 min-h-[500px] sm:max-w-md',
                className
              )}
            >
              <div className="border border-neutral-400 p-4 rounded-lg backdrop-blur-md shadow-xl flex flex-col gap-2 bg-white/15">
                <h3 className="font-bold text-lg">{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Jimmy;
