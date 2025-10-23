import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales – L’Atelier de Jimmy',
  robots: {
    index: false,
    follow: true,
  },
};
const page = () => {
  return (
    <main className="flex flex-col gap-6 p-6 max-w-3xl mx-auto text-gray-900 mt-30">
      <h1 className="text-3xl font-bold text-center">Mentions légales</h1>

      <h2 className="text-xl font-semibold">1. Informations générales</h2>
      <p>
        Conformément aux dispositions des articles 6-III et 19 de la Loi
        n°2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique
        (LCEN), il est précisé aux utilisateurs du site{' '}
        <a
          href="https://atelier-de-jimmy.com/"
          className="text-blue-600 hover:underline"
        >
          https://atelier-de-jimmy.com/
        </a>{' '}
        l’identité des différents intervenants dans le cadre de sa réalisation
        et de son suivi.
      </p>
      <p>
        <strong>Éditeur du site :</strong>
        <br />
        <strong>FELTMANN JIMMY</strong>
        <br />
        <strong>SIRET :</strong> 94906077600018
        <br />
        <strong>SIREN :</strong> 949060776
        <br />
        <strong>Code NAF :</strong> 4520A (Entretien et réparation de véhicules
        automobiles légers)
        <br />
        <strong>Siège social :</strong> 5 ROUTE DE LA FORCE, 24100 BERGERAC
        <br />
        <strong>Téléphone :</strong> 06 70 94 28 02
        <br />
        <strong>Email :</strong>{' '}
        <a
          href="mailto:jimmyfeltmann24@gmail.com"
          className="text-blue-600 hover:underline"
        >
          jimmyfeltmann24@gmail.com
        </a>
        <br />
        <strong>Représentant légal :</strong> Jimmy Feltmann
      </p>

      <h2 className="text-xl font-semibold">2. Hébergement</h2>
      <p>
        Le site{' '}
        <a
          href="https://atelier-de-jimmy.com"
          className="text-blue-600 hover:underline"
        >
          https://atelier-de-jimmy.com
        </a>{' '}
        est hébergé par :
      </p>
      <p>
        <strong>Vercel Inc.</strong>
        <br />
        340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
        <br />
        Site web :{' '}
        <a href="https://vercel.com" className="text-blue-600 hover:underline">
          https://vercel.com
        </a>
      </p>

      <h2 className="text-xl font-semibold">
        3. Conception et réalisation du site
      </h2>
      <p>
        <strong>Webmaster :</strong>
        <br />
        Michel CHAN-WAI-NAM
        <br />
        <a
          href="mailto:michel.cwn@gmail.com"
          className="text-blue-600 hover:underline"
        >
          michel.cwn@gmail.com
        </a>
      </p>

      <h2 className="text-xl font-semibold">4. Propriété intellectuelle</h2>
      <p>
        L’ensemble du contenu présent sur le site{' '}
        <a
          href="https://atelier-de-jimmy.com"
          className="text-blue-600 hover:underline"
        >
          https://atelier-de-jimmy.com
        </a>{' '}
        (textes, images, graphismes, logo, icônes, etc.) est la propriété
        exclusive de <strong>FELTMANN JIMMY</strong>, sauf mention contraire.
      </p>
      <p>
        Certaines images ou illustrations utilisées sur le site proviennent de
        banques d’images libres de droits, notamment Pexels, et restent la
        propriété de leurs auteurs respectifs, conformément à leurs conditions
        d’utilisation.
      </p>
      <p>
        Toute reproduction, distribution, modification, adaptation,
        retransmission ou publication, même partielle, de ces éléments est
        strictement interdite sans l’accord écrit préalable de{' '}
        <strong>FELTMANN JIMMY</strong>.
      </p>

      <h2 className="text-xl font-semibold">5. Limitation de responsabilité</h2>
      <p>
        L’éditeur s’efforce de fournir des informations exactes et mises à jour,
        mais ne saurait être tenu responsable des erreurs, omissions ou
        résultats pouvant être obtenus par l’usage de ces informations.
      </p>
      <p>
        L’utilisateur reconnaît utiliser le site sous sa seule responsabilité.
      </p>

      <h2 className="text-xl font-semibold">6. Données personnelles</h2>
      <p>
        Le site{' '}
        <a
          href="https://atelier-de-jimmy.com"
          className="text-blue-600 hover:underline"
        >
          https://atelier-de-jimmy.com
        </a>{' '}
        ne collecte <strong>aucune donnée personnelle</strong> et{' '}
        <strong>n’utilise pas de cookies</strong>.
      </p>
      <p>
        En cas de contact par email, les informations transmises sont utilisées
        uniquement dans le cadre du traitement de la demande et ne sont ni
        conservées, ni transmises à des tiers sans consentement préalable.
      </p>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD)
        et à la loi Informatique et Libertés, vous pouvez exercer vos droits
        d’accès, de rectification et de suppression de vos données en adressant
        un email à :{' '}
        <a
          href="mailto:jimmyfeltmann24@gmail.com"
          className="text-blue-600 hover:underline"
        >
          jimmyfeltmann24@gmail.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold">7. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. Tout
        litige relatif à l’utilisation du site{' '}
        <a
          href="https://atelier-de-jimmy.com"
          className="text-blue-600 hover:underline"
        >
          https://atelier-de-jimmy.com
        </a>{' '}
        sera soumis à la compétence exclusive des tribunaux français.
      </p>
    </main>
  );
};

export default page;
